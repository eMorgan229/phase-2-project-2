import React, {useState} from 'react'
import HomeCards from './HomeCards'


function Home() {
  const [photoData, setPhotoData] = useState('https://images.metmuseum.org/CRDImages/ep/original/DP367958.jpg')
  const [photoData1, setPhotoData1] = useState('https://images.metmuseum.org/CRDImages/ep/original/DP367958.jpg')


  function handleChange(e){
    setPhotoData(e.target.value)
  }
  function handleChange1(e){
    setPhotoData1(e.target.value)
  }


  return ( 
     <div className='page'>
        <h2 className='home-title'>Please Select 2 exhibitions to enjoy! </h2>
        <div className='home-cards'>
          <HomeCards photoData={photoData1} handleChange={handleChange1}/> 
          <HomeCards photoData={photoData} handleChange={handleChange}/> 
       </div>
         



    </div>
    
  )
}

export default Home