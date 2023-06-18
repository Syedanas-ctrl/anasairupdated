import { ActionConstants } from "../constants";

const INIT_STATE = {
  labels: [],
  loading: false,
};
export const LabelReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionConstants.Labels.GetLabelsInit:
      return {
        labels: INIT_STATE.labels,
        loading: true,
      };
    case ActionConstants.Labels.GetLabelsSuccess:
      return {
        labels: action.payload,
        loading: false,
      };
    case ActionConstants.Labels.LabelsReset:
    case ActionConstants.Labels.GetLabelsFail:
      return {
        labels: INIT_STATE.labels,
        loading: false,
      };
    default:
      return state;
  }
};
