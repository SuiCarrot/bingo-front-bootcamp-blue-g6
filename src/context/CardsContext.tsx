import { createContext, ReactNode, useContext, useState } from "react";
import { Cards } from "types/interfaces";

const Context = createContext({});

interface Props {
  children: ReactNode;
}

export const CardsContext = ({ children }: Props) => {
  const [quantityCards, setQuantityCards] = useState<Cards[]>([
    {
      id: "",
      numbers: [],
      playerId: "",
    },
  ]);

  return (
    <Context.Provider value={{ quantityCards, setQuantityCards }}>
      {children}
    </Context.Provider>
  );
};

export const useCards = () => {
  const contextCards = useContext(Context);

  if (!contextCards) {
    throw new Error("useCards deve ser utilizado dentro do CardsContext");
  }

  return contextCards;
};
