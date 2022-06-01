import React, {useState, useEffect} from 'react'
import AddFormCard from './AddFormCard'


function AddedArt({isPosted}) {
    const [userArt, setuserArt]= useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Userwork')
          .then(res=> res.json())
          .then((userArt)=>setuserArt(userArt))
      },[isPosted])
      const mapUserArt = userArt.map((UserArtObj) => {
        return <AddFormCard 
        key ={UserArtObj.id} 
        exCards={UserArtObj}
        onDeleteArt={onDeleteArt}
        id = {UserArtObj.id}
        
        />
    })

    function onDeleteArt(id){
      const deletedArray = userArt.filter((userArtObj)=> userArtObj.id !== id); 
      setuserArt(deletedArray)

    }

  return (
    <div>
        <ul className='card'>{mapUserArt}
        </ul>
    </div>
  )
}

export default AddedArt