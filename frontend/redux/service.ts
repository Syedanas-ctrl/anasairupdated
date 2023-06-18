import { AxiosResponse } from "axios";
import axios from "./axiosapi";

export const MealsService = {
  getMeals: async () => {
    const response: AxiosResponse = await axios.get("/meals");
    return response;
  },
  addMeal: async (payload: any) => {
    const response: AxiosResponse = await axios.post("/meals", payload);
    return response;
  },
  deleteMeal: async (id: string) => {
    const response: AxiosResponse = await axios.delete(`/meals/${id}`);
    return response;
  },
  updateMeal: async (payload: any) => {
    const response: AxiosResponse = await axios.patch(`/meals`, payload);
    return response;
  },
};

export const LabelService = {
  getLabels: async () => {
    const response: AxiosResponse = await axios.get("/labels");
    return response;
  },
};

export const OrderService = {
  PlaceOrder: async (payload: any) => {
    const response: AxiosResponse = await axios.post("/orders", payload);
    return response;
  },
  ModifyOrder: async (payload: any) => {
    const response: AxiosResponse = await axios.patch("/orders", payload);
    return response;
  },
};
