import { Dispatch } from "@reduxjs/toolkit";
import { ActionConstants } from "../constants";
import { OrderService } from "../service";

export interface orderPayload {
  id?: string;
  items: string[];
  passengerId: string;
  price: number;
}

export const OrderActions = {
  PlaceOrder: (payload: orderPayload) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ActionConstants.Orders.PlaceOrderInit });
      const response = await OrderService.PlaceOrder(payload);
      if (response.status === 201) {
        dispatch({
          payload: response?.data,
          type: ActionConstants.Orders.PlaceOrderSuccess,
        });
      } else {
        dispatch({
          type: ActionConstants.Orders.PlaceOrderFail,
        });
      }
    } catch {
      dispatch({
        type: ActionConstants.Orders.PlaceOrderFail,
      });
    }
  },
  ModifyOrder: (payload: orderPayload) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ActionConstants.Orders.ModifyOrderInit });
      const response = await OrderService.ModifyOrder(payload);
      if (response.status === 200) {
        dispatch({
          payload: response.data,
          type: ActionConstants.Orders.ModifyOrderSuccess,
        });
      } else {
        dispatch({
          type: ActionConstants.Orders.ModifyOrderFail,
        });
      }
    } catch {
      dispatch({
        type: ActionConstants.Orders.ModifyOrderFail,
      });
    }
  },
};
