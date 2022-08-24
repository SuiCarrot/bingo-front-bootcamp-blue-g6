import api from "./api";
import { Cards } from "../types/interfaces";

const route = "/cards";

export const CardService = {
  CreateCardGame: async (values: Cards) => {
    try {
      const res = await api.post(route, values);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  GetAllCards: async () => {
    try {
      const res = await api.get(route);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  GetCardById: async (id: string | null) => {
    try {
      const res = await api.get(route + `/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  DeleteCardGame: async (id: string) => {
    try {
      const res = await api.delete(route + `/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  GenerateNumbersCard: async (qtty: number, playerId: string | null) => {
    try {
      const res = await api.post(
        route + `/player-cards?qtty=${qtty}&playerId=${playerId}`
      );
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },
};
