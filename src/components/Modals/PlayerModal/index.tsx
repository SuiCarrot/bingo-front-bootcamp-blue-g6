import { useCards } from "context/CardsContext";
import { useMatch } from "context/matchContext";
import { usePlayer } from "context/PlayerContext";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardService } from "service/CardService";
import { Login } from "service/LoginPlayer";
import {
  CardsContextType,
  MatchGameContextType,
  PlayerContext,
} from "types/interfaces";
import "./style.scss";

const PlayerModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { valuesMatch } = useMatch() as MatchGameContextType;

  const { setQuantityCards } = useCards() as CardsContextType;

  const { valuesLogin, setValuesLogin } = usePlayer() as PlayerContext;

  const handleValuesPlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesLogin({
      ...valuesLogin,
      matchId: id,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadPlayer = await Login.Player(valuesLogin);

    if (payloadPlayer) {
      localStorage.setItem("playerId", payloadPlayer.data.id);
      generateNumbersCard();
    } else {
      alert("Error");
    }
  };

  const generateNumbersCard = async () => {
    const playerId = localStorage.getItem("playerId");
    const payloadCard = await CardService.GenerateNumbersCard(
      valuesMatch.numberOfCards,
      playerId
    );

    if (payloadCard) {
      setQuantityCards(payloadCard.data);
      localStorage.setItem("cardId", payloadCard.data[0].id);
      navigate("/capybaraGame");
    } else {
      alert("Erro ao gerar os numeros do(s) card(s)!");
    }
  };

  return (
    <main className="main-playerContent">
      <section className="container-playerModal">
        <div className="content-player">
          <h2>Cadastrar Player</h2>

          <form onSubmit={handleSubmit} className="submit-player">
            <input
              autoComplete="off"
              type="text"
              placeholder="digite seu nome"
              name="name"
              id="name"
              onChange={handleValuesPlayer}
              required
            />

            <input
              type="text"
              placeholder="Coloque uma url de avatar"
              name="avatar"
              id="avatar"
              onChange={handleValuesPlayer}
              required
            />

            <button type="submit">Logar</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default PlayerModal;
