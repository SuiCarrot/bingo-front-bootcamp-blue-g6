import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "service/LoginPlayer";
import { PlayerLogin } from "types/interfaces";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const [valuesLogin, setValuesLogin] = useState<PlayerLogin>({
    name: "",
    avatar: "",
    score: 0,
    isHost: false,
    matchId: "",
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesLogin((values: PlayerLogin) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = await Login.Player(valuesLogin);

    if (payload) {
      navigate("/capybaraGame");
    } else {
      alert("Não foi possivel conectar-se a sala!");
    }
  };

  return (
    <>
      <main className="homePage">
        <div className="container-box">
          <h1>
            bing<span>o</span>
          </h1>

          <form onSubmit={handleLogin} className="content-box">
            <input
              className="nickname"
              type="text"
              placeholder="digite seu nome"
              name="name"
              id="name"
              onChange={handleValues}
              required
            />
            <input
              className="nickname-image"
              type="text"
              placeholder="insira url da imagem do avatar"
              name="avatar"
              id="avatar"
              onChange={handleValues}
              required
            />
            <input
              className="nome-sala"
              type="text"
              placeholder="insira o nome da sala"
              name="salaName"
              id="salaName"
              onChange={handleValues}
              required
            />
            <input
              className="quantidade-cartelas"
              type="text"
              placeholder="quantidade de cartelas por jogador"
              name="quantidadeCartelas"
              id="quantidadeCartelas"
              onChange={handleValues}
              required
            />
            <input
              className="quantidade-partidas"
              type="text"
              placeholder="quantas partidas deseja jogar?"
              name="quantidadePartidas"
              id="quantidadePartidas"
              onChange={handleValues}
              required
            />

            <div className="game-mode">
              <input
                className="selector-game-mode"
                type="radio"
                id="singleplayer"
                name="game_mode"
                value="singleplayer"
              />
              <label>singleplayer</label>
              <input
                className="selector-game-mode"
                type="radio"
                id="multiplayer"
                name="game_mode"
                value="multiplayer"
              />
              <label>multiplayer</label>
            </div>

            <button type="submit">JOGAR</button>
          </form>
        </div>
      </main>
      <footer>
      <p>Mais um produto das organizações capivara!</p>
    </footer>
  </>
  );
};

export default Home;
