import api from "./api";

export const PlayerService = {
  GetPlayerId: async (id: string) => {
    try {
      const res = await api.get(`/player/${id}`);
      return res;
    } catch (error: any) {
      console.log({ message: `Error` + error });
    }
  },
};
