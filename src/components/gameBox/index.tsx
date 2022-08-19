import Cartela from "components/cartela";
import "./style.scss";

const GameBox = () => {
  console.log('Renderizou o gameBox');

  return (
    <div className="container-box">
      <div className="title">bola atual</div>
      <div className="infos">
        <div className="anteriores-box">anteriores</div>
        <div>
          <div className="bola" />
          <div>
            <button>
              {" "}
              bing<span>o</span>!
            </button>
          </div>
        </div>
        <div className="tempo-box">
          tempo
          <div className="tempo-nmr">8</div>
        </div>
      </div>

      <div className="tables">
        <Cartela />
      </div>
    </div>
  );
};

export default GameBox;
