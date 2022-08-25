import { useMatch } from "context/matchContext";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardService } from "service/CardService";
import { Login } from "service/LoginPlayer";
import { MatchGameContextType, PlayerLogin } from "types/interfaces";
import "./style.scss";

const PlayerModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { valuesMatch } = useMatch() as MatchGameContextType;

  const [valuesLogin, setValuesLogin] = useState<PlayerLogin>({
    name: "",
    avatar: "",
    score: 0,
    isHost: false,
    matchId: id,
  });

  const handleValuesPlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesLogin((values: PlayerLogin) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
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
      // payloadCard.data.map((card: any, index: number) => localStorage.setItem(`card_${index}_id`, card.id))
      localStorage.setItem('cardId', payloadCard.data[0].id);
      navigate("/capybaraGame");
      console.log(payloadCard.data);
      console.log("Numeros gerados com sucesso!");
    } else {
      alert("Erro ao gerar os numeros do(s) card(s)!");
    }
  };

  return (
    <section className="container-playerModal">
      <div className="content-player">
        <h2>Cadastrar Player</h2>

        <form onSubmit={handleSubmit} className="submit-player">
          <input
            autoComplete ="off"
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
  );
};

export default PlayerModal;
