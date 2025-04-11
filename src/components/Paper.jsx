import './Paper.css'

/**
 * 页面。
 * @param key
 * @param id
 * @param className
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function Paper({id, className = '', children}) {
  return (
    <div id={id} className={`paper ${className}`}>
        {children}
    </div>
  )
}