import { PlayerLogin } from "types/interfaces";
import api from "./api";

export const Login = {
  Player: async (value: PlayerLogin) => {
    try {
      const res = await api.post("/player", value);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },
};
