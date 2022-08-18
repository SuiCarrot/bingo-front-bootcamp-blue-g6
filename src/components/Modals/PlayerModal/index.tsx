import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Login } from "service/LoginPlayer";
import { PlayerLogin } from "types/interfaces";
import ContainerModal from "../ContainerModals";
import "./style.scss";

const PlayerModal = () => {
    const {id} = useParams();

  const [valuesLogin, setValuesLogin] = useState<PlayerLogin>({
    name: "",
    avatar: "",
    score: 0,
    isHost: false,
    matchId: id,
  });

  console.log(valuesLogin.matchId);

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
        alert('Sucesso')
    }
    else {
        alert('Error')
    }
  }

  return (
    <section className="container-playerModal">
      <div className="content-player">
        <h2>Cadastrar Player</h2>

        <form onSubmit={handleSubmit} className="submit-player">
          <input
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
