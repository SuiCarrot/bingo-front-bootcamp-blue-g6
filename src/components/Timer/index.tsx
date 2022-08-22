import React, { useEffect, useRef, useState } from "react";
import { DrawNumbersService } from "service/DrawNumberService";

const Timer = ({seconds}: {seconds: number}) => {
    // function regretive(seconds: number) {
    //     setTimeout(() => {
    //         if (seconds > 0) {
    //             setTime(seconds - 1);
    //             return regretive(seconds - 1)
    //         }
    //     }, 1000)
    // } 

    const [time, setTime] = useState({seconds});

    const tick = () => {
        if (time.seconds === 0) {
            reset()
        }
        else {
            setTime({seconds: time.seconds - 1})
        }
    }

    const reset = () => {
        setTime({seconds: seconds})
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            tick();
        }, 1000)
        return () => clearInterval(timerId);
    })

//   const renderBall = async () => {
//     const payloadBall = await DrawNumbersService.Patch(
//       drawnNumber.id,
//       drawnNumber
//     );

//     if (payloadBall) {
//       console.log("Atualiznado a bola!");
//       setDrawnNumber(payloadBall.data);
//     } else {
//       alert("Erro na requisição PATCH!");
//     }
//   };

  return (
    <div>
        <p>{`${time.seconds.toString().padStart(2, '0')}`}</p>
    </div>
  );
};

export default Timer;
