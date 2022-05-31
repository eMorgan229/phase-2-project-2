import React, {useState} from 'react'

function AddForm() {
  
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [author, setAuthor] = useState('')

  function addedWork(e){
    e.preventDefault()
   const userWork = { title, image, author}

    fetch('http://localhost:3000/userWork', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userWork)
    })
   console.log(userWork)

  }

  return (
<div className="form-container">
    <form className="new-poem-form"  onSubmit ={addedWork}>
            <input placeholder="Title" type="text" id="title" value={title} onChange= {(e)=> setTitle(e.target.value) } />
            <input placeholder="Artist" type="text" value={author} onChange= {(e)=> setAuthor(e.target.value) } />
            <textarea placeholder="Add your masterpiece here..." type="img" value={image} onChange= {(e)=> setImage(e.target.value)} />
            <input type="submit" value="Share your masterpiece" />
 
    </form>
  </div>
  
  )
 
}

export default AddForm