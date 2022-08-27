import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerModal from "../ContainerModals";
import "./style.scss";

interface Prop {
  closeModal: (value: any) => void;
}

const BingoModal = ({ closeModal }: Prop) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    closeModal(false);
    navigate("/");
  };

  return (
    <ContainerModal>
      <div className="bingo-content" onClick={handleCloseModal}>
        <h2>
          bing<span>o</span>!
        </h2>

        <h3>Parabéns!!!</h3>

        <p>Você é o vencedor dessa rodada! merece o selo capivara</p>
      </div>
    </ContainerModal>
  );
};

export default BingoModal;
