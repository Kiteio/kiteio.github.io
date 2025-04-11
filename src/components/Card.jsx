import './Card.css'

/**
 * 卡片。
 * @param className
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card({className = '', children}) {
  return (
    <div className={`card ${className}`}>{children}</div>
  )
}