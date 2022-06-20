import React from 'react'

const Header = () => {
  return (
    <header className='row block center'>
        <div>
            <a href="#/">
                <h1 className='white'>Shopping Cart</h1>
            </a>
        </div>
        <div>
            <a href="#/cart" className='m-10 white'>Cart</a> <a href="#/signin" className='m-10 white'>Sign In</a>
        </div>
    </header>
  )
}

export default Header