import React from 'react'
import HomeDropDown from './HomeDropDown'


function HomeCards({photoData, handleChange}) {
  return (
    <div className='home-cards-div'>
     <div className='home-cards'>
          <HomeDropDown className='home-dropdown' handleChange={handleChange}/>
         <img className='home-image'src={photoData} alt='art'/>

    </div>
    </div>
  )
}

export default HomeCards