import { ReactNode } from "react";
import Overlay from "../Overlay";
import "./style.scss";

interface ModalProps {
  children: ReactNode;
}

const ContainerModal = (props: ModalProps) => {
  return (
    <Overlay>
      <section className="containerModal">
        <div className="childrenProp">{props.children}</div>
      </section>
    </Overlay>
  );
};

export default ContainerModal;
