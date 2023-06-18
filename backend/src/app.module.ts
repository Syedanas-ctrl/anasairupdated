import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealModule } from './meals/meal.module';
import { OrderModule } from './orders/order.module';

@Module({
  imports: [MealModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
