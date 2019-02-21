import React from 'react'
import SWpic from './swpic.png'


function Header() {
  return (
    <header className="mainHeader">
      <img className="catpic" src={SWpic} alt="cat pic" />
    </header>
  )
}


export default Header
