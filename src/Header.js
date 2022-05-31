import React, {useState, useEffect} from 'react'
 import Exhibitions from './Exhibitions.js';
import {Link} from 'react-router-dom';
function Header() {
    
  return (
      <nav>
        <header className='header'>Tiny Museum</header>
        <Link to ="/">Home</Link>
        <Link to='/exhibitions'>Exhibitions</Link>
        <Link to = "/addown">Add Your Own Exhibit</Link>
    </nav>
  )
}

export default Header