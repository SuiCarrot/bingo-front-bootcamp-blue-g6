import { ReactNode } from "react";
import "./style.scss";

interface ModalProps {
  children: ReactNode;
}

const ContainerModal = (props: ModalProps) => {
  return (
    <section className="containerModal">
      <div className="childrenProp">{props.children}</div>
    </section>
  );
};

export default ContainerModal;
