import React, {useState, useEffect } from 'react'
import ExContainer from './ExContainer.js'


function Exhibitions() {
    const [exCards, setExCards]= useState([])

    useEffect(() => {
        fetch('http://localhost:3000/artWork')
          .then(res=> res.json())
          .then(exCards=>setExCards(exCards))
      },[])
  return (
    <div className="page">
        <ExContainer exCards={exCards}/>
    </div>
  )
}

export default Exhibitions