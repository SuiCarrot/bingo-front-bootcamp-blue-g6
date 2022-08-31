import "material-icons/iconfont/material-icons.css";
import ContainerModal from "../ContainerModals";
import "./style.scss";

interface Prop {
  closeModal: (value: any) => void;
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
          Toma distraído! Você não fez bingo e agora vai passar!
        </p>
      </div>
    </ContainerModal>
  );
};

export default FalseBingoModal;
