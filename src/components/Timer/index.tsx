import { Dispatch, useEffect, useState } from "react";
import { DrawNumbersService } from "service/DrawNumberService";
import { DrawNumbers } from "types/interfaces";

interface Props {
    seconds: number;
    drawnNumber: DrawNumbers;
    setDrawnNumber: Dispatch<DrawNumbers>;
}

const Timer = ({ seconds, drawnNumber, setDrawnNumber }: Props) => {
  const [time, setTime] = useState({ seconds });

  const tick = () => {
    if (time.seconds === 0) {
      reset();
    } else {
      setTime({ seconds: time.seconds - 1 });
    }
  };

  const reset = () => {
    randomNumbers();
    setTime({ seconds: seconds });
  };

  const randomNumbers = async () => {
    const payloadPatch = await DrawNumbersService.Patch(drawnNumber.id, drawnNumber);

    if (payloadPatch) {
      setDrawnNumber(payloadPatch.data);
    }
    else {
      alert('Erro ao realizar um PATCH na requisição.')
    }
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p>{`${time.seconds.toString().padStart(2, "0")}`}</p>
    </div>
  );
};

export default Timer;
