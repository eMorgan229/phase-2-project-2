import React, {useState, useEffect} from 'react'

function AddedArt() {
    const [userArt, setuserArt]= useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Userwork')
          .then(res=> res.json())
          .then(userArt=>setuserArt(userArt))
      },[])
      const mapUserArt = userArt.map((UserArtObj) => {
        return <userArt 
        key ={UserArtObj.id} 
        userArt={UserArtObj} />
    })

  return (
    <div>
         {/* <ul className='cards'>{userArt}</ul> */}
        
    </div>
  )
}

export default AddedArt