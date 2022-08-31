import { CardCartela } from "components/cartelas";
import { useCards } from "context/CardsContext";
import { CardsContextType } from "types/interfaces";
import "./style.scss";



const Cartela = () => {
  const { quantityCards } = useCards() as CardsContextType;  

  return (
    <>
      {quantityCards.map((card, index) => (
        <CardCartela numbers={card.numbers} index={index}/>
      ))}
    </>
  );
};


export default Cartela;