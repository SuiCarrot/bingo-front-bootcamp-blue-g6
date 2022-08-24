import Cartela from "components/cartela";
import Timer from "components/Timer";
import { useMatch } from "context/matchContext";
import { useState } from "react";
import { DrawNumbersService } from "service/DrawNumberService";
import { DrawNumbers, MatchGameContextType } from "types/interfaces";
import "./style.scss";

const GameBox = () => {
  const { valuesMatch, setValuesMatch } = useMatch() as MatchGameContextType;

  const [drawnNumber, setDrawnNumber] = useState<DrawNumbers>({
    id: "",
    actualNumber: [],
    baseNumbers: [],
    drawNumbers: [],
    lastNumbers: [],
  });
  const [bingoBtn, setBingoBtn] = useState(false);
  const [timer, setTimer] = useState(false);

  const handleStart = async () => {
    const payloadCreate = await DrawNumbersService.Post(drawnNumber);

    if (payloadCreate) {
      setDrawnNumber(payloadCreate.data);
      setBingoBtn(true);
      setTimer(true);
    } else {
      alert("Algo de errado não está certo!");
    }
  };

  const handleBingo = async () => {
    const cardId = localStorage.getItem("cardId");

    if (cardId) {
      const payloadBingo = await DrawNumbersService.CheckBingo(
        cardId,
        drawnNumber.id
      );

      if (payloadBingo) {
        console.log("Rota configurada");
        console.log(payloadBingo.data);
      } else {
        alert("Algo de errado não está certo!");
      }
    }
  };

  const numberOfCards = () => {
    const array = [];
    for (let i = 0; i < valuesMatch.numberOfCards; i++) {
      array.push(<Cartela key={i} />)
    }
    return <div>{array}</div>
  }

  return (
    <div className="container-box">
      <div className="title">bola atual</div>
      <div className="infos">
        <div className="anteriores-box">
          <p>anteriores</p>

          <p>{drawnNumber.lastNumbers}</p>
        </div>
        <div>
          <div className="bola" />
          <p>{drawnNumber.actualNumber}</p>
          <div>
            {bingoBtn === true ? (
              <button onClick={handleBingo}>
                {" "}
                bing<span>o</span>!
              </button>
            ) : (
              <button onClick={handleStart}>Começar!</button>
            )}
          </div>
        </div>
        <div className="tempo-box">
          tempo
          <div className="tempo-nmr">
            {timer === true ? (
              <Timer
                seconds={valuesMatch.drawTime}
                drawnNumber={drawnNumber}
                setDrawnNumber={setDrawnNumber}
              />
            ) : (
              0
            )}
          </div>
        </div>
      </div>

      <div className="tables">
        {}
      </div>
    </div>
  );
};

export default GameBox;
