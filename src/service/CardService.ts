import api from "./api";
import { Cards } from "../types/interfaces";

export const CardService = {
  CreateCardGame: async (values: Cards) => {
    try {
      const res = await api.post("/cards", values);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  GetAllCards: async () => {
    try {
      const res = await api.get("/cards");
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  GetCardById: async (id: string) => {
    try {
      const res = await api.get(`/cards/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  DeleteCardGame: async (id: string) => {
    try {
      const res = await api.delete(`/cards/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },
};
