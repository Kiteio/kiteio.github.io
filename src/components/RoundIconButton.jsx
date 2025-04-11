import './RoundIconButton.css'

/**
 * 圆形图标链接。
 * @param icon 图标
 * @param alt
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
export default function RoundIconButton({icon, alt, onClick}) {
  return (
    <div className='round-icon-link' onClick={onClick}>
      <img src={icon} alt={alt}/>
    </div>
  )
}