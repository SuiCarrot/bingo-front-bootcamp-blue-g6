import './style.scss';

const Sidebar = () => {

  return (
    <>
      <body>
      <div className="sidebar">
        <div className='capivaraText'>Capivara</div>
        <div>
          <img className='img' src="http://tny.im/t0l" alt="" />
            Perfil 1
         </div>
        <div>
          <img className='img' src="http://tny.im/t0m" alt="" />
            Perfil 2
        </div>

        <div className="chat-container">
          <p className='olho-box'>Olho no jogo</p>
          <p>Hello. How are you today?</p>
        </div>  


      </div>

      <div className="body-text">
      </div>
      </body>
    </>
  )
}

export default Sidebar