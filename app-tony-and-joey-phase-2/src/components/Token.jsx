import React from 'react'

function Token({Name, Image, Year}) {
 
  return (
    <div>
      This is {Name}
      <p>{Year}</p>
      {/* <button onClick={handlebitcoinBtn} className="BitcoinButton"><img src={Image} alt={Year}/></button> */}

      </div>
  )
}

export default Token;