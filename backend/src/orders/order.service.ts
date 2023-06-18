import { Injectable } from '@nestjs/common';
import { Order } from './order.model';
import { DynamoDB } from 'aws-sdk';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OrderService {
  private dynamoDB: DynamoDB;
  private tableName: string = 'orders';

  constructor() {
    this.dynamoDB = new DynamoDB({
      region: process.env.REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY_ID,
    });
  }

  async getOrders() {
    const result = await this.dynamoDB
      .scan({
        TableName: this.tableName,
      })
      .promise();
    return (
      result.Items?.map((item) => ({
        id: item.id.S,
        items: item.items.SS,
        passengerId: item.passengerId.S,
        price: item.price.N,
      })) || []
    );
  }

  async postOrder(items: string[], passengerId: string, price: number) {
    const orderId = uuid();
    await this.dynamoDB
      .putItem({
        TableName: this.tableName,
        Item: {
          id: { S: orderId },
          items: { SS: items },
          passengerId: { S: passengerId },
          price: { N: price.toString() },
        },
      })
      .promise();
    const responseSending = {
      id: orderId,
      items,
      passengerId,
      price,
    }
    return responseSending;
  }

  async updateOrder(order: Order) {
    const res = await this.dynamoDB
      .updateItem({
        TableName: 'orders',
        Key: {
          id: { S: order.id },
        },
        UpdateExpression:
          'set #items = :items, passengerId = :passengerId, price = :price',
        ExpressionAttributeNames: {
          '#items': 'items',
        },
        ExpressionAttributeValues: {
          ':items': { SS: order.items },
          ':passengerId': { S: order.passengerId },
          ':price': { N: order.price.toString() },
        },
      })
      .promise()
      .catch((err) => console.log(err));
    console.log('res', res);
    return order;
  }
}
