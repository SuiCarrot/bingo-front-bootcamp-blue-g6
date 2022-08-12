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
    score: 2,
    isHost: false,
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
    }
    else {
      alert('Não foi possivel conectar-se a sala!');
    }
  }

  return (
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

          <div className="game-mode">
            <input
              type="radio"
              id="singleplayer"
              name="game_mode"
              value="singleplayer"
            />
            <label>singleplayer</label>
            <input
              type="radio"
              id="multiplayer"
              name="game_mode"
              value="multiplayer"
            />
            <label>multiplayer</label>
          </div>

          <button type='submit'>JOGAR</button>
        </form>
      </div>
      <footer>
        <p>Mais um produto das organizações capivara!</p>
      </footer>
    </main>
  );
};

export default Home;
