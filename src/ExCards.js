import React, {useState} from 'react'


function ExCards({exCards}) {
    const {image, author, title} = exCards

  return (
    <ul className="card">
      <div className="image">
        <img src={image} alt={author} />
      </div>
      <div className="details">
        
        <strong>{author}</strong>
        <span> · {title}</span>
      </div>
    </ul>
    
  )
}

export default ExCards