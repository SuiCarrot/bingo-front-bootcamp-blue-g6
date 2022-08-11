import './style.scss';

const Sidebar = () => {

  return (
    <>
      <body>
        <div className="sidebar">
          <div className='capivaraText'>capivara</div>
          <div className='profiles'>
            <div>
              <img className='img' src="http://tny.im/t0l" alt="" />
                Perfil 1
            </div>
            <div>
              <img className='img' src="http://tny.im/t0m" alt="" />
                Perfil 2
            </div>
          </div>

          <div className="chat-container">
            <p className='olho-box'>Olho no jogo!</p>
            <div className='text-chat'>
              <p>karen marcou!</p>
              <input type="text" />
            </div>
          </div>  


        </div>

      </body>
    </>
  )
}

export default Sidebar