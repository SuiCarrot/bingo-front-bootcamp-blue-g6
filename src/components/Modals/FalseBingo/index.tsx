import React from "react";
import ContainerModal from "../ContainerModals";
import "material-icons/iconfont/material-icons.css";
import "./style.scss";

const FalseBingoModal = () => {
  return (
    <ContainerModal>
      <div className="content">
        <span className="material-icons">warning_amber</span>

        <h2>Errrrrrou!</h2>

        <p>Toma distraído! Você não fez bingo e agora vai passar <strong>3 rodadas sem poder marcar!</strong></p>
      </div>
    </ContainerModal>
  );
};

export default FalseBingoModal;
