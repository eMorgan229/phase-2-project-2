import React, {useState} from 'react'


function ExCards({exCards}) {
    const {image, author, title} = exCards
    const [isFavorited, setIsFavorited] = useState(false);

  return (
    <li className="card">
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
        <strong>{author}</strong>
        <span> · {title}</span>
      </div>
    </li>
    
  )
}

export default ExCards