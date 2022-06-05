import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <div className='head'>
      <div>
        <h1 className='h-text'>Bancor-AMM</h1>
      </div>
      <div className='h-button'>
        <button className='btn'> CONNECT</button>
      </div>
    </div>
  )
}

export default Header