import { useMatch } from "context/matchContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MatchService } from "service/MatchService";
import { MatchGameContextType } from "types/interfaces";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const { valuesMatch, setValuesMatch } = useMatch() as MatchGameContextType;

  const handleValuesMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.name === "drawTime" ||
      e.target.name === "numberOfRounds" ||
      e.target.name === "numberOfCards"
    ) {
      setValuesMatch({
        ...valuesMatch,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setValuesMatch({
        ...valuesMatch,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadMatch = await MatchService.CreateMatch(valuesMatch);

    if (payloadMatch) {
      navigate(`/player/${payloadMatch.data.id}`);
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
              autoComplete ="off"
              className="nome-sala"
              type="text"
              placeholder="insira o nome da sala"
              name="name"
              id="name"
              onChange={handleValuesMatch}
              required
            />
            
            <span className="rangeValueTime">Tempo de sorteio: {valuesMatch.drawTime} seg</span>

            <input
              autoComplete ="off"
              className="quantidade-partidas"
              type="range"
              min={5}
              max={25}
              name="drawTime"
              id="drawTime"
              onChange={handleValuesMatch}
              required
            />

            <span className="rangeValueCard">Cartelas: {valuesMatch.numberOfCards}</span>


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
