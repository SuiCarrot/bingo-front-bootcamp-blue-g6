import "./style.scss";

const Home = () => {
  return (
    <main className="homePage">
      <div className="container-box">
        <h1>bing<span>o</span></h1>

        <div className="content-box">
          <input className='nickname' type="text" placeholder="digite seu nome" />
          <input className='nickname-image' type="text" placeholder="insira url da imagem do avatar" />

          <div className='game-mode'>
            <input type='radio' id='singleplayer' name='game_mode' value='singleplayer'/>
            <label>singleplayer</label>
            <input type='radio' id='multiplayer' name='game_mode' value='multiplayer'/>
            <label>multiplayer</label>
          </div>
          
          <button>JOGAR</button>
        </div>
        
      </div>
      <footer>
        <p>Mais um produto das organizações capivara!</p>
      </footer>
    </main>
  );
};

export default Home;
