import Paper from './Paper'
import Tag from './Tag'
import './Product.css'

/**
 * 产品。
 * @param product
 * @returns {JSX.Element}
 * @constructor
 */
export default function Product({product}) {
  return (
    <Paper key={product.id} id={product.id}>
      {/* 名称 */}
      <a href={product.url} target='_blank'>
        <h2>{product.name}</h2>
      </a>

      <ul className='tag-group'>
        {/* 标签 */}
        {product.tags.map((tag) => <li key={tag}><Tag>{tag}</Tag></li>)}
      </ul>
      <div className={product.isMobileImage ? 'product-description-mobile' : 'product-description'}>
        {/* 描述 */}
        <ul>
          {product.description.map((p, index) => <li key={index}><p>{p}</p></li>)}
        </ul>
        {/* 图片 */}
        <img className={product.isMobileImage ? 'screenshot-mobile' : 'screenshot-desktop'} src={product.image} alt='Punica screenshoot'/>
      </div>
    </Paper>
  )
}