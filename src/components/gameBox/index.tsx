/* eslint-disable react-hooks/exhaustive-deps */
import Cartela from "components/cartela";
import BingoModal from "components/Modals/BingoModal";
import FalseBingoModal from "components/Modals/FalseBingo";
import Timer from "components/Timer";
import { useMatch } from "context/matchContext";
import { usePlayer } from "context/PlayerContext";
import { useEffect, useState } from "react";
import { DrawNumbersService } from "service/DrawNumberService";
import {
  DrawNumbers,
  MatchGameContextType,
  PlayerContext,
} from "types/interfaces";
import "./style.scss";

const GameBox = () => {
  const { valuesMatch } = useMatch() as MatchGameContextType;
  const { valuesLogin } = usePlayer() as PlayerContext;

  const [drawnNumber, setDrawnNumber] = useState<DrawNumbers>({
    id: "",
    actualNumber: [],
    baseNumbers: [],
    drawNumbers: [],
    lastNumbers: [],
  });
  const [bingoBtn, setBingoBtn] = useState(false);
  const [timer, setTimer] = useState(false);

  const [resultBingo, setResultBingo] = useState<boolean | undefined | null>(
    null
  );

  const [bingoModal, setBingoModal] = useState(false);
  const [falseBingoModal, setFalseBingoModal] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const renderModal = () => {
    if (resultBingo === false) {
      setShowModal(true);
      setFalseBingoModal(true);
      setResultBingo(null);
    } else if (resultBingo === true) {
      setShowModal(true);
      setBingoModal(true);
      setResultBingo(null);
    }
  };

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
        setResultBingo(payloadBingo.data);
      } else {
        alert("Algo de errado não está certo!");
      }
    }
  };

  useEffect(() => {
    renderModal();
  }, [handleBingo]);

  return (
    <div className="container-box">
      <div className="player-infos">
        <img
          className="player-avatar"
          src={valuesLogin.avatar}
          alt="foto de perfil do usuário"
        />
        <p className="player-name">{valuesLogin.name}</p>
      </div>
      <h3 className="title">{valuesMatch.name}</h3>
      <div className="infos">
        <div className="anteriores-box box-menu-superior">
          <h3 className="sub-titulo-superior">anteriores</h3>
          <div className="box-bolas-anteriores">
            <p className="bolas-anteriores">{drawnNumber.lastNumbers[0]}</p>
            <p className="bolas-anteriores">{drawnNumber.lastNumbers[1]}</p>
            <p className="bolas-anteriores">{drawnNumber.lastNumbers[2]}</p>
          </div>
          <div className="box-bolas-anteriores">
            <p className="bolas-anteriores">{drawnNumber.lastNumbers[3]}</p>
            <p className="bolas-anteriores">{drawnNumber.lastNumbers[4]}</p>
            <p className="bolas-anteriores">{drawnNumber.lastNumbers[5]}</p>
          </div>
        </div>

        <div className="box-menu-superior">
          <div className="bola-sorteada">
            <p className="bola">{drawnNumber.actualNumber}</p>
          </div>
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
        <div className="tempo-box box-menu-superior">
          <h3 className="sub-titulo-superior">tempo</h3>
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
        <Cartela />
      </div>

      {falseBingoModal && showModal && (
        <FalseBingoModal closeModal={setShowModal} />
      )}

      {bingoModal && showModal && <BingoModal closeModal={setShowModal} />}
    </div>
  );
};

export default GameBox;
