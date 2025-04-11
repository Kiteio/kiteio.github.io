import Spacer from './Spacer.jsx'
import LinkButton from './LinkButton.jsx'
import Card from './Card.jsx'
import './ProductCard.css'

/**
 * 产品预览卡片。
 * @param product
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProductCard({product}) {
  return (
    <Card className='product-card'>
      <h3 className='no-margin'>{product.abbreviation}</h3>
      <Spacer height='16px'/>
      <div>{product.briefly}</div>
      <Spacer height='24px'/>
      <LinkButton href={`#${product.id}`}>了解详情</LinkButton>
    </Card>
  )
}