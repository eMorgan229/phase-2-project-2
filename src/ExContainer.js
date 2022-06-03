import React from 'react'
import ExCards from './ExCards.js'

function ExContainer({exCards}) {

   const mapExCards = exCards.map((cardsObj) => {
       return <ExCards 
       key ={cardsObj.id} 
       exCards={cardsObj} />
   })

  return (
    <div className='home-card-div'>
        <ul className='cards'>{mapExCards}</ul>
    </div>
  )
}

export default ExContainer