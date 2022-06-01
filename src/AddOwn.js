import React, { useState } from 'react'
import AddForm from './AddForm'
import AddedArt from './AddedArt'

function AddOwn() {
  const [isPosted, setIsPosted] = useState(false) 
  return (
    <div>
      <AddForm posted={setIsPosted} isPosted={isPosted}/>
      <AddedArt isPosted={isPosted}/>
    </div>
  )
}

export default AddOwn