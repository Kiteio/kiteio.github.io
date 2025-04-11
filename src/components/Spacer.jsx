/**
 * 空白区域。
 * @param width
 * @param height
 * @returns {JSX.Element}
 * @constructor
 */
export default function Spacer({width = '0', height = '0'}) {
  return (
    <div style={{width, height}} />
  )
}