import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import styles from "./index.module.scss"

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import { useState } from 'react'


function App() {
  const [cartIsEmpty] = useState(true)

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <nav>
          <h1>Fashion titans👗 👜 👠</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        {/* for react-router 6, Routes replaced switch */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="test" element={(
            <div>
              <h2>Test Page</h2>
              <p>Test</p>
            </div>
          )}
          />
          <Route Path="/redirect" element={<Navigate to="/about" />} />
          <Route path="/checkout" element={cartIsEmpty ? <Navigate to="/products" /> : <p>Checkout</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App