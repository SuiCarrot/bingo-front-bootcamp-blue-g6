import api from "./api";
import { DrawNumbers } from "../types/interfaces";

const route = "/drawn-numbers";

export const DrawNumbersService = {
  Post: async (values: DrawNumbers) => {
    try {
      const res = await api.post(route, values);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  GetAll: async () => {
    try {
      const res = await api.get(route);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  GetById: async (id: string) => {
    try {
      const res = await api.get(route + `/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  Patch: async (id: string | undefined, values: DrawNumbers) => {
    try {
      const res = await api.patch(route + `/${id}`, values);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  Delete: async (id: string) => {
    try {
      const res = await api.delete(route + `/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  CheckBingo: async (cardId: string, drawnNumbersId: string | undefined) => {
    try {
      const res = await api.get(
        route +
          `/checkVictory/check?cardId=${cardId}&drawnNumbersId=${drawnNumbersId}`
      );
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },
};
