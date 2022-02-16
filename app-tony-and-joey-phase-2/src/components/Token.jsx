
import React, { useState }from 'react'


function Token({id, Name, Image, Year}) {

  const [theClick, setTheClick] = useState()

  function handleClick() {
     setTheClick(!id)

  }

  return (
    <div>
      <h2>{Name}</h2>
      <button onClick={handleClick} className=""> <img src={Image} alt={Year}/> </button>
      <p>{Year} </p>
    </div>

  )
}

export default Token;        