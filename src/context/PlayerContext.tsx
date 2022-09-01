import { createContext, ReactNode, useContext, useState } from "react";
import { PlayerLogin } from "types/interfaces";

const Context = createContext({});

interface Props {
  children: ReactNode;
}

export const PlayerContext = ({ children }: Props) => {
  const [valuesLogin, setValuesLogin] = useState<PlayerLogin>({
    name: "",
    avatar: "",
    score: 0,
    isHost: false,
    matchId: '',
  });

  return (
    <Context.Provider value={{ valuesLogin, setValuesLogin }}>
      {children}
    </Context.Provider>
  );
};

export const usePlayer = () => {
  const playerContext = useContext(Context);

  if (!playerContext) {
    throw new Error("usePlayer deve ser utilizado dentro do PlayerContext");
  }

  return playerContext;
};
