import React from 'react'
import HomeDropDown from './HomeDropDown'


function HomeCards({photoData, handleChange}) {
  return (
     <div>
          <HomeDropDown className='home-dropdown' handleChange={handleChange}/>
         <img className='home-cards'src={photoData} alt='art'/>

    </div>
  )
}

export default HomeCards