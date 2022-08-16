import Cartela from "components/cartela";
import "./style.scss";

const GameBox = () => {
  return (
    <div className="container-box">
      <div className="title">bola atual</div>
      <div className="infos">
        <p className="anteriores-box">anteriores</p>
        <p>
          <div className="bola" />
          <p>
            <button>
              {" "}
              bing<span>o</span>!
            </button>
          </p>
        </p>
        <p className="tempo-box">
          tempo
          <div className="tempo-nmr">8</div>
        </p>
      </div>

      <div className="tables">
        <Cartela />
      </div>
    </div>
  );
};

export default GameBox;
