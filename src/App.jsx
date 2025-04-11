import './App.css'
import TopAppBar from './components/TopAppBar.jsx'
import Paper from './components/Paper.jsx'
import Spacer from './components/Spacer.jsx'
import Product from './components/Product.jsx'
import ProductCard from './components/ProductCard.jsx'
import Toast from './components/Toast.jsx'
import product from './data/product.js'
import appreciation_code from './assets/appreciation_code.png'
import {useEffect, useState} from 'react'

export default function App() {
  const [toastVisible, setToastVisible] = useState(false)

  useEffect(() => {
    const body = document.body

    if (toastVisible) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }
  })

  return (
    <>
      {/* 导航栏 */}
      <header>
        <TopAppBar onOpenToast={() => setToastVisible(true)} />
      </header>

      <main>
        <Paper className='center-gravity'>
          <Spacer height='48px'/>
          <h1 className='no-margin'>欢迎使用</h1>
          <h1 className='no-margin'><u>Kiteio</u> 出品软件</h1>
          <p className='quote'>这些便捷、现代化的程序可以给您带来更好的体验</p>
          <Spacer height='28px'/>

          {/* 产品卡片 */}
          <ul className='product-card-group'>
            {product.slice(0, 2).map((product) => <li key={product.id}><ProductCard product={product} /></li>)}
          </ul>
        </Paper>

        {/* 产品介绍 */}
        <ul>
          {product.map((product) => <li key={product.id}><Product product={product} /></li>)}
        </ul>
      </main>

      {/* 捐赠弹窗 */}
      <Toast visible={toastVisible} onDismiss={() => setToastVisible(false)}>
        <img className='appreciation-code' src={appreciation_code} alt='Appreciation Code' />
        <Spacer height='16px' />
        <div>感谢您的支持，我们将持续带来新内容。</div>
      </Toast>
    </>
  )
}