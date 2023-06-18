import { Dispatch } from "@reduxjs/toolkit";
import { ActionConstants } from "../constants";
import { MealsService } from "../service";

export const MealActions = {
  GetAllMeals: () => async (dispatch: Dispatch) => {
    dispatch({ type: ActionConstants.Meals.GetMealsInit });
    try {
      const response = await MealsService.getMeals();
      if (response.status === 200) {
        dispatch({
          payload: response.data,
          type: ActionConstants.Meals.GetMealsSuccess,
        });
      } else {
        dispatch({
          message: response.data.message,
          type: ActionConstants.Meals.GetMealsFail,
        });
      }
    } catch (error: any) {
      dispatch({
        message: error.message,
        type: ActionConstants.Meals.GetMealsFail,
      });
    }
  },
  AddMeal: (payload: any) => async (dispatch: Dispatch) => {
    dispatch({ type: ActionConstants.Meals.AddMealInit });
    try{
      const response = await MealsService.addMeal(payload);
      if (response.status === 200) {
        dispatch({
          type: ActionConstants.Meals.AddMealSuccess,
        });
      }
      else {
        dispatch({
          message: response.data.message,
          type: ActionConstants.Meals.AddMealFail,
        });
      }
    }
    catch (error: any) {
      dispatch({
        message: error.message,
        type: ActionConstants.Meals.AddMealFail,
      });
    }
  },
  DeleteMeal: (payload: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ActionConstants.Meals.DeleteMealInit });
    try {
      const response = await MealsService.deleteMeal(payload);
      if (response.status === 200) {
        dispatch({
          payload: response.data,
          type: ActionConstants.Meals.DeleteMealSuccess,
        });
      } else {
        dispatch({
          message: response.data.message,
          type: ActionConstants.Meals.DeleteMealFail,
        });
      }
    } catch (error: any) {
      dispatch({
        message: error.message,
        type: ActionConstants.Meals.DeleteMealFail,
      });
    }
  },
  ModifyMeal: (payload: any) => async (dispatch: Dispatch) => {
    dispatch({ type: ActionConstants.Meals.ModifyMealInit });
    try {
      const response = await MealsService.updateMeal(payload);
      if (response.status === 200) {
        dispatch({
          payload: response.data,
          type: ActionConstants.Meals.ModifyMealSuccess,
        });
      } else {
        dispatch({
          message: response.data.message,
          type: ActionConstants.Meals.ModifyMealFail,
        });
      }
    } catch (error: any) {
      dispatch({
        message: error.message,
        type: ActionConstants.Meals.ModifyMealFail,
      });
    }
  },
};
