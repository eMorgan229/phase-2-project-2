import React from 'react'
import ExCards from './ExCards.js'

function ExContainer({exCards}) {
    console.log(exCards)

   const mapExCards = exCards.map((cardsObj) => {
       return <ExCards 
       key ={cardsObj.id} 
       exCards={cardsObj} />
   })

  return (
    <div>
        <ul className='cards'>{mapExCards}</ul>
    </div>
  )
}

export default ExContainer