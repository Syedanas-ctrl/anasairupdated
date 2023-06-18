import { ActionConstants } from "../constants";

const INIT_STATE = {
  meals: [],
  loading: false,
};

export interface MealsPayload {
  name: string;
  description: string;
  starters: string;
  desert: string;
  price: number;
  image: string;
  labels: string[];
}
export const MealsReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionConstants.Meals.GetMealsInit:
      return {
        meals: INIT_STATE.meals,
        loading: true,
      };
    case ActionConstants.Meals.GetMealsSuccess:
      return {
        meals: action.payload,
        loading: false,
      };
    case ActionConstants.Meals.MealsReset:
    case ActionConstants.Meals.GetMealsFail:
      return {
        meals: INIT_STATE.meals,
        loading: false,
      };
    case ActionConstants.Meals.AddMealInit:
    case ActionConstants.Meals.ModifyMealInit:
    case ActionConstants.Meals.DeleteMealInit:
      return {
        ...state,
        loading: true,
      };
    case ActionConstants.Meals.AddMealSuccess:
    case ActionConstants.Meals.AddMealFail:
    case ActionConstants.Meals.DeleteMealSuccess:
    case ActionConstants.Meals.DeleteMealFail:
    case ActionConstants.Meals.ModifyMealSuccess:
    case ActionConstants.Meals.ModifyMealFail:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
