import github from '../assets/github.svg'
import kiteio from '../assets/kiteio.png'
import buy_me_a_coffee from '../assets/buy_me_a_coffee.svg'
import RoundIconButton from './RoundIconButton.jsx'
import Spacer from './Spacer.jsx'
import './TopAppBar.css'

/**
 * 顶部导航栏。
 * @returns {JSX.Element}
 * @constructor
 */
export default function TopAppBar({onOpenToast}) {
  return (
    <div className='top-app-bar'>
      {/* 品牌 */}
      <a href='./'>
        <div className='app-bar-content-group'>
          {/* Logo */}
          <img className='logo' src={kiteio} alt='Logo' />
          <Spacer width='8px' />
          {/* 名称 */}
          <div className='name'>Kiteio</div>
        </div>
      </a>
      {/* 导航 */}
      <div className='app-bar-content-group'>
        <RoundIconButton icon={buy_me_a_coffee} alt='Buy me a coffee' onClick={onOpenToast} />
        <Spacer width='32px' />
        {/* GitHub */}
        <a href='https://github.com/Kiteio' target='_blank'>
          <RoundIconButton icon={github} alt='GitHub' />
        </a>
      </div>
    </div>
  )
}