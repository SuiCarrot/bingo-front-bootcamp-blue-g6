import ContainerModal from '../ContainerModals';
import './style.scss';

const LoserModal = () => {
  return (
    <ContainerModal>
        <div className='loser-content'>
            <h2>Perdeu</h2>

            <p>Não foi dessa vez <strong>pequena capivara</strong>. Tente vencer numa proxima jogada.</p>
        </div>
    </ContainerModal>
  )
}

export default LoserModal