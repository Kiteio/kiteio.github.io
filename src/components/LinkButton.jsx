import './LinkButton.css'

/**
 * 链接按钮。
 * @param href
 * @param target
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function LinkButton({href, target, children}) {
  return (
    <div>
      <a href={href} target={target} className='link-button'>{children}</a>
    </div>
  )
}