import './Toast.css'

/**
 * 提示。
 * @param visible
 * @param onDismiss
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function Toast({visible, onDismiss, children}) {
  return (
    visible ? <div className='toast-mask' onClick={onDismiss}>
      <div onClick={e => e.stopPropagation()} className='toast'>{children}</div>
    </div> : <></>
  )
}