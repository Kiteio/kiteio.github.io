import './Tag.css'

/**
 * 标签。
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function Tag({children}) {
  return (
    <span className='tag'>{children}</span>
  )
}