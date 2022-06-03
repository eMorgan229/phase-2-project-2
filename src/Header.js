import React, {useState, useEffect} from 'react'
 import Exhibitions from './Exhibitions.js';
import {Link} from 'react-router-dom';
function Header() {
    
  return (
    <nav>
        <header>Tiny Museum</header>
      
        <Link to ="/" >
          <button className='home-button'>Home</button>
          </Link>

        <Link to='/exhibitions' >
          <button className='home-button'>Exhibitions</button>
          </Link>

        <Link to = "/addown" >
          <button className="home-button">Add Your Own Exhibit</button>
          </Link>
    </nav>
  )
}

export default Header