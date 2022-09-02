import "material-icons/iconfont/material-icons.css";
import ContainerModal from "../ContainerModals";
import "./style.scss";

interface Prop {
  closeModal: (value: boolean) => void;
}

const FalseBingoModal = ({ closeModal }: Prop) => {
  const handleCloseModal = () => {
    closeModal(false);
  };

  return (
    <ContainerModal>
      <div className="content" onClick={handleCloseModal}>
        <span className="material-icons">warning_amber</span>

        <h2>Errrrrrou!</h2>

        <p>
          Toma distraído! Você não fez bingo e agora vai esperar <strong>3 rodadas até marcar</strong>!
        </p>
      </div>
    </ContainerModal>
  );
};

export default FalseBingoModal;
