import { useEffect, useState } from "react";
import { Cards } from "../../types/interfaces";
import { CardService } from "../../service/CardService";
import "./style.scss";

const Cartela = () => {
  const [valuesCard, setValuesCard] = useState<Cards>();

  const createCard = async () => {
    const response = await CardService.CreateCardGame({
      id: "",
      numbers: [],
      playerId: localStorage.getItem("playerId"),
    });

    if (response) {
    } else {
      alert("Erro");
    }
  };

  console.log("Rodou");
  createCard();

  return (


    <table >
      <thead className="card-title">
        Cartela 01
      </thead>

      <tbody>

        <tr>
          <td className="tg-0lax">1</td>
          <td className="tg-0lax">2</td>
          <td className="tg-0lax">3</td>
          <td className="tg-0lax">4</td>
          <td className="tg-0lax">5</td>
        </tr>
        <tr>
          <td className="tg-0lax">5</td>
          <td className="tg-0lax">6</td>
          <td className="tg-0lax">7</td>
          <td className="tg-0lax">8</td>
          <td className="tg-0lax">9</td>
        </tr>
        <tr>
          <td className="tg-0lax">10</td>
          <td className="tg-0lax">11</td>
          <td className="free"></td>
          <td className="tg-0lax">12</td>
          <td className="tg-0lax">13</td>
        </tr>
        <tr>
          <td className="tg-0lax">14</td>
          <td className="tg-0lax">15</td>
          <td className="tg-0lax">16</td>
          <td className="tg-0lax">17</td>
          <td className="tg-0lax">18</td>
        </tr>
        <tr>
          <td className="tg-0lax">19</td>
          <td className="tg-0lax">20</td>
          <td className="tg-0lax">21</td>
          <td className="tg-0lax">22</td>
          <td className="tg-0lax">23</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cartela;
