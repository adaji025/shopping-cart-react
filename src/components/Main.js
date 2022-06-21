import React from 'react'
import Product from './Product'

const Main = (props) => {
    const { products, onAddProduct } = props
  return (
    <main className='block col-2'>
        <h1>Products</h1>
        <div className='row'>
            {products.map((product) => (
                <Product key={product.id} product={product} onAddProduct={onAddProduct} />
            ))}
        </div>
    </main>
  )
}

export default Main