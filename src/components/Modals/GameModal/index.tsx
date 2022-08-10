import ContainerModal from '../ContainerModals/index'
import './style.scss'

const GameModal = () => {
  return (
    <ContainerModal>
        <h2>bing<span>o</span></h2>

        <div className='content'>
          <p>Número de cartelas por jogador: <span>5</span></p>
          <p>Tempo entre sorteios: <span>10</span> segundos.</p>

          <div>
            <button>Compartilhar link</button>
            <button>Aguardando jogadores</button>
          </div>
        </div>
    </ContainerModal>
  )
}

export default GameModal