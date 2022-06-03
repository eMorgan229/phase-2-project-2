import React, {useState} from 'react'


function AddFormCard({exCards, onDeleteArt, id}) {
  console.log(`hello ${exCards} `)
    const {image, author, title} = exCards
    const [isFavorited, setIsFavorited] = useState(false);

   function handleDelete (){
        
    fetch(`http://localhost:3000/userWork/${id}`, {
        method: 'DELETE',
        
      })
      .then((r) => r.json())
      .then(() => {
          onDeleteArt(id);
      })

   }

  return (
    <ul className="card">
      <div className="image">
        <img src={image} alt={author} />
      </div>
      <div className="details">

        {isFavorited ? (
          <button
            onClick={() => setIsFavorited(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setIsFavorited(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
        <strong>{author}</strong>
        <span> · {title}</span>
      </div>
    </ul>
    
  )
}

export default AddFormCard