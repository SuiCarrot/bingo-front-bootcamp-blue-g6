import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "service/LoginPlayer";
import { MatchService } from "service/MatchService";
import { MatchGame, PlayerLogin } from "types/interfaces";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const [valuesMatch, setValuesMatch] = useState<MatchGame>({
    name: "",
    numberOfCards: 0,
    numberOfRounds: 0,
    drawTime: 0,
    link: "",
    winner: "",
  });

  const handleValuesMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.name === "drawTime" ||
      e.target.name === "numberOfRounds" ||
      e.target.name === "numberOfCards"
    ) {
      setValuesMatch((values: MatchGame) => ({
        ...values,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setValuesMatch((values: MatchGame) => ({
        ...values,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadMatch = await MatchService.CreateMatch(valuesMatch);

    if (payloadMatch) {
      navigate(`/capybaraGame/${payloadMatch.data.id}`);
    } else {
      alert("Informações da partida incorretas!");
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
              className="nome-sala"
              type="text"
              placeholder="insira o nome da sala"
              name="name"
              id="name"
              onChange={handleValuesMatch}
              required
            />
            <input
              className="quantidade-cartelas"
              type="text"
              placeholder="quantidade de cartelas por jogador"
              name="numberOfCards"
              id="numberOfCards"
              onChange={handleValuesMatch}
              required
            />
            <input
              className="quantidade-partidas"
              type="text"
              placeholder="quantas partidas deseja jogar?"
              name="numberOfRounds"
              id="numberOfRounds"
              onChange={handleValuesMatch}
              required
            />

            <input
              className="quantidade-partidas"
              type="text"
              placeholder="Tempo de sorteio?"
              name="drawTime"
              id="drawTime"
              onChange={handleValuesMatch}
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
