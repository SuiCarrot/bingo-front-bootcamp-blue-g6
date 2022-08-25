import BingoModal from "components/Modals/BingoModal";
import FalseBingoModal from "components/Modals/FalseBingo";
import GameModal from "components/Modals/GameModal";
import LoserModal from "components/Modals/LoserModal";
import Sidebar from "components/sidebar";
import Cartela from "components/cartela";
import GameBox from "components/gameBox";
import "./style.scss";
import PlayerModal from "components/Modals/PlayerModal";
import { useEffect, useState } from "react";

const GamePage = () => {
  const resultBingo = localStorage.getItem("bingoResult");

  const [bingoResult, setBingoResult] = useState<boolean>();

  const [bingoModal, setBingoModal] = useState(false);
  const [falseBingoModal, setFalseBingoModal] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const showAModal = () => {
    if (resultBingo === "false") {
      setFalseBingoModal(!falseBingoModal);
      setShowModal(true);
    } else if (resultBingo === "true") {
      setBingoModal(!bingoModal);
      setShowModal(true);
    }
  };

  useEffect(() => {
    showAModal();
  }, []);

  return (
    <main className="gamePage">
      {/* <Sidebar /> */}
      {/* <FalseBingoModal /> */}
      {/* <Cartela/> */}

      <GameBox />

      {bingoModal && showModal && <BingoModal />}

      {falseBingoModal && showModal && (
        <FalseBingoModal closeModal={setShowModal} />
      )}

      {/* <BingoModal /> */}
      {/* <FalseBingoModal /> */}
      {/* <GameModal /> */}
      {/* <LoserModal /> */}
    </main>
  );
};

export default GamePage;
