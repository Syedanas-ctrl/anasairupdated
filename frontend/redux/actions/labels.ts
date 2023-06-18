import { Dispatch } from "@reduxjs/toolkit";
import { ActionConstants } from "../constants";
import { LabelService } from "../service";

export const LabelActions = {
  GetAllLabels: () => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ActionConstants.Labels.GetLabelsInit });
      const response = await LabelService.getLabels();
      if (response.status === 200) {
        dispatch({
          payload: response.data,
          type: ActionConstants.Labels.GetLabelsSuccess,
        });
      } else {
        dispatch({
          message: response.data.message,
          type: ActionConstants.Labels.GetLabelsFail,
        });
      }
    } catch (error: any) {
      dispatch({
        message: error.message,
        type: ActionConstants.Labels.GetLabelsFail,
      });
    }
  },
};
