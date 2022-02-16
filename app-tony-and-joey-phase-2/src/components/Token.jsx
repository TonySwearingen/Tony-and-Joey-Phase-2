
import React, { useState }from 'react'

import TokenInfo from './TokenInfo'

function Token({id, Name, Image, Year}) {


  return (
    <div>
      <h2>{Name}</h2>
      <img src={Image} alt={Year} />
      <p>{Year}</p>
    </div>

  )
}

export default Token;