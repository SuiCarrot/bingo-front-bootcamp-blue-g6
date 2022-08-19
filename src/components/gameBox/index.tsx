import Cartela from "components/cartela";
import Timer from "components/Timer";
import { useEffect, useState } from "react";
import { DrawNumbersService } from "service/DrawNumberService";
import { DrawNumbers } from "types/interfaces";
import "./style.scss";

const GameBox = () => {
  const [drawnNumber, setDrawnNumber] = useState<DrawNumbers>({
    id: '',
    actualNumber: [],
    baseNumbers: [],
    drawNumbers: [],
    lastNumbers: [],
  });

  useEffect(() => {
    
  }, []);

  const handleStart = async () => {
    const payloadCreate = await DrawNumbersService.Post(drawnNumber);
    console.log(payloadCreate?.data);

    if (payloadCreate) {
      console.log('Sucesso');
      setDrawnNumber(payloadCreate.data);
    }
    else {
      alert('Algo de errado não está certo!')
    }
  }

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
            <button onClick={handleStart}>
              {" "}
              Começar!
            </button>
          </div>
        </div>
        <div className="tempo-box">
          tempo
          <div className="tempo-nmr">
            <Timer seconds={10} />
          </div>
        </div>
      </div>

      <div className="tables">
        <Cartela />
      </div>
    </div>
  );
};

export default GameBox;
