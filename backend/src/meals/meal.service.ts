import { Injectable } from '@nestjs/common';
import { Meal } from './meal.model';
import { DynamoDB } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import 'dotenv/config'

@Injectable()
export class MealService {
  private dynamoDB: DynamoDB;
  private tableName: string = 'Meals';

  constructor() {
    this.dynamoDB = new DynamoDB({
      region: process.env.REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY_ID,
    });
  }

  //insert a meal
  async insertMeal(
    name: string,
    description: string,
    starter: string,
    desert: string,
    price: number,
    image: string,
  ) {
    const mealId = uuid();

    await this.dynamoDB
      .putItem({
        TableName: this.tableName,
        Item: {
          id: { S: mealId },
          name: { S: name },
          description: { S: description },
          starter: { S: starter },
          desert: { S: desert },
          price: { N: price.toString() },
          image: { S: image },
        },
      })
      .promise();

    return { id: mealId };
  }

  //fetch all meals
  async getMeals() {
    const result = await this.dynamoDB
      .scan({
        TableName: this.tableName,
      })
      .promise();
    return result.Items?.map((item) => ({
      id: item.id.S,
      name: item.name.S,
      description: item.description.S,
      starter: item.starter.S,
      desert: item.desert.S,
      price: item.price.N,
      image: item.image.S,
    }));
  }

  //update a meal
  async updateMeal(meal: Meal) {
    await this.dynamoDB
      .updateItem({
        TableName: this.tableName,
        Key: {
          id: { S: meal.id },
        },
        UpdateExpression:
          'SET #name = :name, description = :description, starter = :starter, desert = :desert, price = :price, image = :image',
        ExpressionAttributeNames: {
          '#name': 'name',
        },
        ExpressionAttributeValues: {
          ':name': { S: meal.name },
          ':description': { S: meal.description },
          ':starter': { S: meal.starter },
          ':desert': { S: meal.desert },
          ':price': { N: meal.price.toString() },
          ':image': { S: meal.image },
        },
      })
      .promise();
  }
}
