import api from "./api";
import { PlayerLogin } from "../types/interfaces";

export const PlayerService = {
  GetPlayerId: async (id: string) => {
    try {
      const res = await api.get(`/player/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  UpdatedPlayer: async (id: string, values: PlayerLogin) => {
    try {
      const res = await api.patch(`/player/${id}`, values);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  DeletePlayer: async (id: string) => {
    try {
      const res = await api.delete(`/player/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },
};
