import React, {useState} from 'react'
import HomeCards from './HomeCards'
import HomeDropDown from './HomeDropDown'


function Home() {
  const [photoData, setPhotoData] = useState('https://images.metmuseum.org/CRDImages/ep/original/DP367958.jpg')

function handleChange(e){
  setPhotoData(e.target.value)
}

  return ( 
     <div>Home
        <h2>Please Select 2 exhibitions to enjoy! </h2>
       <HomeDropDown handleChange={handleChange}/>
        <HomeDropDown handleChange={handleChange}/> 
         <HomeCards photoData={photoData}/> 
       <HomeCards photoData={photoData}/> 



    </div>
    
  )
}

export default Home