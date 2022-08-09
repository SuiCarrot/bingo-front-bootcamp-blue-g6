import { useNavigate } from "react-router-dom";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate()

  return (
    <main className="homePage">
      <div className="container-box">
        <h1>bing<span>o</span></h1>

        <div className="content-box">
          <input type="text" placeholder="digite seu nome" />
          <button onClick={() => navigate('/capybaraGame')}>JOGAR</button>
        </div>
      </div>

      <footer>
        <p>Mais um produto das organizações capivara!</p>
      </footer>
    </main>
  );
};

export default Home;
