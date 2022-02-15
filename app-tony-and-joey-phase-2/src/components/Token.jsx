import React from 'react'

function Token({Name, Image, Year}) {
 
  return (
    <div>
      This is {Name}
      <p>{Year}</p>
      <img src={Image} alt={Name} />
      </div>
  )
}

export default Token;