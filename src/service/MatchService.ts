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

  GetAllMatchs: async () => {
    try {
      const res = await api.get("/match");
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

  UpdatedMatch: async (id: string, values: MatchGame) => {
    try {

    }
    catch (error: any) {
      
    }
  }
};
