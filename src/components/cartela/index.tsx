import React,{ useEffect, useState } from "react";
import { CardService } from "service/CardService";
import { Cards } from "types/interfaces";
import "./style.scss";

const Cartela = () => {
  const [CardId, setCardId] = useState<Cards>();

  const getCardMatch = async () => {
    const cardId = localStorage.getItem("cardId");
    const payloadCardId = await CardService.GetCardById(cardId);

    if (payloadCardId) {
      setCardId(payloadCardId.data);
    } else {
      alert("Erro ao renderizar as informações!");
    }
  };

  useEffect(() => {
    getCardMatch();
  }, []);

  const [changeColor, setchangeColor] = useState(false);

  const toggle = ()=>{
    setchangeColor(!changeColor)
  }

  return (
    <table>
      <thead className="card-title">Cartela 01</thead>

      <tbody>
        <tr>
          <td onClick={toggle} className={(changeColor ? 'toggle--close' : '')} >{CardId?.numbers[0]}</td>
          <td onClick={toggle} className={(changeColor ? 'toggle--close' : '')} >{CardId?.numbers[1]}</td>
          <td className="numberBox">{CardId?.numbers[2]}</td>
          <td className="numberBox">{CardId?.numbers[3]}</td>
          <td className="numberBox">{CardId?.numbers[4]}</td>
        </tr>
        <tr>
          <td className="numberBox">{CardId?.numbers[6]}</td>
          <td className="numberBox">{CardId?.numbers[7]}</td>
          <td className="numberBox">{CardId?.numbers[8]}</td>
          <td className="numberBox">{CardId?.numbers[9]}</td>
          <td className="numberBox">{CardId?.numbers[10]}</td>
        </tr>
        <tr>
          <td className="numberBox">{CardId?.numbers[11]}</td>
          <td className="numberBox">{CardId?.numbers[12]}</td>
          <td className="free"></td>
          <td className="numberBox">{CardId?.numbers[13]}</td>
          <td className="numberBox">{CardId?.numbers[14]}</td>
        </tr>
        <tr>
          <td className="numberBox">{CardId?.numbers[15]}</td>
          <td className="numberBox">{CardId?.numbers[16]}</td>
          <td className="numberBox">{CardId?.numbers[17]}</td>
          <td className="numberBox">{CardId?.numbers[18]}</td>
          <td className="numberBox">{CardId?.numbers[19]}</td>
        </tr>
        <tr>
          <td className="numberBox">{CardId?.numbers[20]}</td>
          <td className="numberBox">{CardId?.numbers[21]}</td>
          <td className="numberBox">{CardId?.numbers[22]}</td>
          <td className="numberBox">{CardId?.numbers[23]}</td>
          <td className="numberBox">{CardId?.numbers[24]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cartela;
