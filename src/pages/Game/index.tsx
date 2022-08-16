import BingoModal from 'components/Modals/BingoModal'
import FalseBingoModal from 'components/Modals/FalseBingo'
import GameModal from 'components/Modals/GameModal'
import LoserModal from 'components/Modals/LoserModal'
import Sidebar from 'components/sidebar'
import Cartela from 'components/cartela'
import GameBox from 'components/gameBox'

import './style.scss'

const GamePage = () => {
  return (
    <main className='gamePage'>
        <Sidebar />
        {/* <FalseBingoModal /> */}
        {/* <Cartela/> */}
        <GameBox/>
        {/* <GameModal /> */}
        {/* <BingoModal /> */}
        {/* <LoserModal /> */}
        {/* <FalseBingoModal /> */}
    </main>
  )
}

export default GamePage