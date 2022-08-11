import BingoModal from 'components/Modals/BingoModal'
import FalseBingoModal from 'components/Modals/FalseBingo'
import GameModal from 'components/Modals/GameModal'
import Sidebar from 'components/sidebar'
import './style.scss'

const GamePage = () => {
  return (
    <main className='gamePage'>
        {/* <Sidebar /> */}
        {/* <GameModal /> */}
        {/* <BingoModal /> */}
        <FalseBingoModal />
    </main>
  )
}

export default GamePage