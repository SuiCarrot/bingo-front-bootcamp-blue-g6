import React from "react";
import ContainerModal from "../ContainerModals";
import "material-icons/iconfont/material-icons.css";
import "./style.scss";

interface Prop {
  closeModal: (value: any) => void
}

const FalseBingoModal = ({closeModal}: Prop) => {
  const handleCloseModal = () => {
    localStorage.removeItem('bingoResult')
    closeModal(false);
  }

  return (
    <ContainerModal>
      <div className="content" onClick={handleCloseModal}>
        <span className="material-icons">warning_amber</span>

        <h2>Errrrrrou!</h2>

        <p>Toma distraído! Você não fez bingo e agora vai passar <strong>3 rodadas sem poder marcar!</strong></p>
      </div>
    </ContainerModal>
  );
};

export default FalseBingoModal;
