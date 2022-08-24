import React,{ useEffect, useState } from "react";
import { CardService } from "service/CardService";
import { Cards } from "types/interfaces";
import "./style.scss";

const Cartela = () => {
  const [CardId, setCardId] = useState<Cards>();

  const getCardMatch = async () => {
    const cardId = localStorage.getItem("cardId");
    const payloadCardId = await CardService.GetCardById(cardId);

    if (payloadCardId) {
      setCardId(payloadCardId.data);
    } else {
      alert("Erro ao renderizar as informações!");
    }
  };

  useEffect(() => {
    getCardMatch();
  }, []);



  const [changeColorOne, setchangeColorOne] = useState(false);
  const [changeColorTwo,setchangeColorTwo] = useState(false);
  const [changeColorThree,setchangeColorThree] = useState(false);
  const [changeColorFour,setchangeColorFour] = useState(false);
  const [changeColorFive,setchangeColorFive] = useState(false);
  const [changeColorSix,setchangeColorSix] = useState(false);
  const [changeColorSeven,setchangeColorSeven] = useState(false);
  const [changeColorEight,setchangeColorEight] = useState(false);
  const [changeColorNine,setchangeColorNine] = useState(false);
  const [changeColorTen,setchangeColorTen] = useState(false);
  const [changeColorEleven,setchangeColorEleven] = useState(false);
  const [changeColorTwelve,setchangeColorTwelve] = useState(false);
  const [changeColorThirteen,setchangeColorThirteen] = useState(false);
  const [changeColorFourteen,setchangeColorFourteen] = useState(false);
  const [changeColorFifteen,setchangeColorFifteen] = useState(false);
  const [changeColorSixteen,setchangeColorSixteen] = useState(false);
  const [changeColorSeventeen,setchangeColorSeventeen] = useState(false);
  const [changeColorEighteen,setchangeColorEighteen] = useState(false);
  const [changeColorNineteen,setchangeColorNineteen] = useState(false);
  const [changeColorTwenty,setchangeColorTwenty] = useState(false);
  const [changeColorTwentyone,setchangeColorTwentyone] = useState(false);
  const [changeColorTwentytwo,setchangeColorTwentytwo] = useState(false);
  const [changeColorTwentythree,setchangeColorTwentythree] = useState(false);
  const [changeColorTwentyfour,setchangeColorTwentyfour] = useState(false);




  const toggleOne  = ()=>{
    setchangeColorOne(!changeColorOne)
  }
  const toggleTwo  = ()=>{
    setchangeColorTwo(!changeColorTwo)
  }
  const toggleThree  = ()=>{
    setchangeColorThree(!changeColorThree)
  }
  const togglefour  = ()=>{
    setchangeColorFour(!changeColorFour)
  }
  const togglefive  = ()=>{
    setchangeColorFive(!changeColorFive)
  }
  const toggleSix  = ()=>{
    setchangeColorSix(!changeColorSix)
  }
  const toggleseven  = ()=>{
    setchangeColorSeven(!changeColorSeven)
  }
  const toggleeight  = ()=>{
    setchangeColorEight(!changeColorEight)
  }
  const togglenine  = ()=>{
    setchangeColorNine(!changeColorNine)
  }
  const toggleten  = ()=>{
    setchangeColorTen(!changeColorTen)
  }

  const toggleeleven  = ()=>{
    setchangeColorEleven(!changeColorEleven)
  }

  const toggletwelve  = ()=>{
    setchangeColorTwelve(!changeColorTwelve)
  }

  const togglethirteen  = ()=>{
    setchangeColorThirteen(!changeColorThirteen)
  }

  const togglefourteen  = ()=>{
    setchangeColorFourteen(!changeColorFourteen)
  }

  const togglefifteen  = ()=>{
    setchangeColorFifteen(!changeColorFifteen)
  }

  const togglesixteen  = ()=>{
    setchangeColorSixteen(!changeColorSixteen)
  }

  const toggleseventeen  = ()=>{
    setchangeColorSeventeen(!changeColorSeventeen)
  }

  const toggleeighteen  = ()=>{
    setchangeColorEighteen(!changeColorEighteen)
  }

  const togglenineteen  = ()=>{
    setchangeColorNineteen(!changeColorNineteen)
  }

  const toggletwenty  = ()=>{
    setchangeColorTwenty(!changeColorTwenty)
  }

  const toggletwentyone  = ()=>{
    setchangeColorTwentyone(!changeColorTwentyone)
  }

  const toggletwentytwo  = ()=>{
    setchangeColorTwentytwo(!changeColorTwentytwo)
  }

  const toggletwentythree  = ()=>{
    setchangeColorTwentythree(!changeColorTwentythree)
  }

  const toggletwentyfour  = ()=>{
    setchangeColorTwentyfour(!changeColorTwentyfour)
  }


  return (
    <table>
      <thead className="card-title">Cartela 01</thead>

      <tbody>
        <tr>
          <td onClick={toggleOne} className={(changeColorOne ? 'toggle--close' : '')} >{CardId?.numbers[0]}</td>
          <td onClick={toggleTwo} className={(changeColorTwo ? 'toggle--close' : '')} >{CardId?.numbers[1]}</td>
          <td onClick={toggleThree} className={(changeColorThree ? 'toggle--close' : '')}>{CardId?.numbers[2]}</td>      
          <td onClick={togglefour} className={(changeColorFour ? 'toggle--close' : '')}>{CardId?.numbers[3]}</td>
          <td onClick={togglefive} className={(changeColorFive ? 'toggle--close' : '')}>{CardId?.numbers[4]}</td>
        </tr>
        <tr>
          <td onClick={toggleSix} className={(changeColorSix ? 'toggle--close' : '')}>{CardId?.numbers[6]}</td>
          <td onClick={toggleseven} className={(changeColorSeven ? 'toggle--close' : '')}>{CardId?.numbers[7]}</td>
          <td onClick={toggleeight} className={(changeColorEight ? 'toggle--close' : '')}>{CardId?.numbers[8]}</td>
          <td onClick={togglenine} className={(changeColorNine ? 'toggle--close' : '')}>{CardId?.numbers[9]}</td>
          <td onClick={toggleten} className={(changeColorTen ? 'toggle--close' : '')}>{CardId?.numbers[10]}</td>
        </tr>
        <tr>
          <td onClick={toggleeleven} className={(changeColorEleven ? 'toggle--close' : '')}>{CardId?.numbers[11]}</td>
          <td onClick={toggletwelve} className={(changeColorTwelve ? 'toggle--close' : '')}>{CardId?.numbers[12]}</td>
          <td className="free"></td>
          <td onClick={togglethirteen} className={(changeColorThirteen ? 'toggle--close' : '')}>{CardId?.numbers[13]}</td>
          <td onClick={togglefourteen} className={(changeColorFourteen ? 'toggle--close' : '')}>{CardId?.numbers[14]}</td>
        </tr>
        <tr>
          <td onClick={togglefifteen} className={(changeColorFifteen ? 'toggle--close' : '')}>{CardId?.numbers[15]}</td>
          <td onClick={togglesixteen} className={(changeColorSixteen ? 'toggle--close' : '')}>{CardId?.numbers[16]}</td>
          <td onClick={toggleseventeen} className={(changeColorSeventeen ? 'toggle--close' : '')}>{CardId?.numbers[17]}</td>
          <td onClick={toggleeighteen} className={(changeColorEighteen ? 'toggle--close' : '')}>{CardId?.numbers[18]}</td>
          <td onClick={togglenineteen} className={(changeColorNineteen ? 'toggle--close' : '')}>{CardId?.numbers[19]}</td>
        </tr>
        <tr>
          <td onClick={toggletwenty} className={(changeColorTwenty ? 'toggle--close' : '')}>{CardId?.numbers[20]}</td>
          <td onClick={toggletwentyone} className={(changeColorTwentyone ? 'toggle--close' : '')}>{CardId?.numbers[21]}</td>
          <td onClick={toggletwentytwo} className={(changeColorTwentytwo ? 'toggle--close' : '')}>{CardId?.numbers[22]}</td>
          <td onClick={toggletwentythree} className={(changeColorTwentythree ? 'toggle--close' : '')}>{CardId?.numbers[23]}</td>
          <td onClick={toggletwentyfour} className={(changeColorTwentyfour ? 'toggle--close' : '')}>{CardId?.numbers[24]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cartela;
