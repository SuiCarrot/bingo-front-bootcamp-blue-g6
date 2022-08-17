import { MatchGame } from "types/interfaces";
import api from "./api";

export const MatchService = {
  CreateMatch: async (values: MatchGame) => {
    try {
      const res = await api.post("/match", values);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },

  GetMatchId: async (id: string) => {
    try {
      const res = await api.get(`/match/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },
};
