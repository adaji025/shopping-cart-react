import React from 'react'

const Product = (props) => {
    const { product, onAddProduct } = props
  return (
    <div className='m-10'>
        <img src={product.image} alt={product.name} className="image small" />
        <h3>{product.name}</h3>
        <div>₦{product.price}</div>
        <div>
            <button className='add-btn'
            onClick={() => onAddProduct(product)}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Product