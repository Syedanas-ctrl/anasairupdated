import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.model';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  addOrder(
    @Body('items') orderItems: string[],
    @Body('passengerId') passengerId: string,
    @Body('price') price: number,
  ): any {
    const idGenerated = this.orderService.postOrder(
      orderItems,
      passengerId,
      price,
    );
    return idGenerated ;
  }

  @Get()
  getAllOrders() {
    return this.orderService.getOrders();
  }

  @Patch()
  updateOrder(
    @Body('id') orderId: string,
    @Body('items') orderItems: string[],
    @Body('passengerId') passengerId: string,
    @Body('price') price: number,
  ): any {
    const updatedOrder = new Order(orderId, orderItems, passengerId, price);
    this.orderService.updateOrder(updatedOrder);
    return updatedOrder;
  }
}
