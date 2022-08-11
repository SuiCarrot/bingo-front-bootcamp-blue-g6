import React from 'react'
import ContainerModal from '../ContainerModals';
import './style.scss';

const BingoModal = () => {
  return (
    <ContainerModal>
        <div className='bingo-content'>
          <h2>bing<span>o</span>!</h2>

          <h3>Parabéns!!!</h3>

          <p>Você é o vencedor dessa rodada! merece o selo capivara</p>
        </div>
    </ContainerModal>
  )
}

export default BingoModal