import { ActionConstants } from "../constants";

const INIT_STATE = {
  orders: [],
  loading: false,
};
export const OrdersReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionConstants.Orders.PlaceOrderInit:
    case ActionConstants.Orders.ModifyOrderInit:
      return {
        orders: INIT_STATE.orders,
        loading: true,
      };
    case ActionConstants.Orders.PlaceOrderSuccess:
    case ActionConstants.Orders.ModifyOrderSuccess:
      return {
        orders: action.payload || [],
        loading: false,
      };
    case ActionConstants.Orders.PlaceOrderFail:
    case ActionConstants.Orders.ModifyOrderFail:
      return INIT_STATE;
    default:
      return state;
  }
};
