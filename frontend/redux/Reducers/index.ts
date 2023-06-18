import { combineReducers } from "@reduxjs/toolkit";
import { MealsReducer } from "./meals";
import { LabelReducer } from "./labels";
import { OrdersReducer } from "./orders";

export default combineReducers({
  meals: MealsReducer,
  labels: LabelReducer,
  orders: OrdersReducer,
});
