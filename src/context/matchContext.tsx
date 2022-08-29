import { createContext, ReactNode, useContext, useState } from "react";
import { MatchGame } from "types/interfaces";

const Context = createContext({});

interface Props {
  children: ReactNode;
}

export const MatchContext = ({ children }: Props) => {
  const [valuesMatch, setValuesMatch] = useState<MatchGame>({
    id: '',
    name: "",
    numberOfCards: 1,
    numberOfRounds: 0,
    drawTime: 5,
    link: "",
    winner: "",
  });

  return (
    <Context.Provider value={{ valuesMatch, setValuesMatch }}>
      {children}
    </Context.Provider>
  );
};

export const useMatch = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useMatch deve ser utilizado dentro do MatchContext");
  }

  return context;
};
