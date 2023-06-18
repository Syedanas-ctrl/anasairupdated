import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { MealService } from './meal.service';
import { Meal } from './meal.model';

@Controller('meals')
export class MealController {
  constructor(private readonly mealService: MealService) {}
  @Post()
  addMeal(
    @Body('name') mealName: string,
    @Body('description') mealDescription: string,
    @Body('starter') mealStarter: string,
    @Body('desert') mealDesert: string,
    @Body('price') mealPrice: number,
    @Body('image') mealImage: string,
  ): any {
    const idGenerated = this.mealService.insertMeal(
      mealName,
      mealDescription,
      mealStarter,
      mealDesert,
      mealPrice,
      mealImage,
    );
    return { id: idGenerated };
  }

  @Get()
  getAllMeals() {
    return this.mealService.getMeals();
  }

  @Patch()
  updateMeal(
    @Body('id') mealId: string,
    @Body('name') mealName: string,
    @Body('description') mealDescription: string,
    @Body('starter') mealStarter: string,
    @Body('desert') mealDesert: string,
    @Body('price') mealPrice: number,
    @Body('image') mealImage: string,
  ): any {
    const updatedMeal = new Meal(
      mealId,
      mealName,
      mealDescription,
      mealStarter,
      mealDesert,
      mealPrice,
      mealImage,
    );
    this.mealService.updateMeal(updatedMeal);
    return updatedMeal;
  }
}
