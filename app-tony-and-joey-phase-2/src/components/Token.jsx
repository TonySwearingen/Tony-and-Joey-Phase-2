
import React, { useState }from 'react'

import TokenInfo from './TokenInfo'

function Token({Name, Image, Year,Definition,Exchanges}) {


const [toggleLike, setToggleLike] = useState(true)

function handleToggle(){
  setToggleLike( Definition => !Definition)
}
  


  return (
    <div>
      {Name}
      {toggleLike ? (
            <><button onClick={handleToggle} className="tokenInfoActive">Info </button><div> {Definition}</div></>
        ) : (
          <><button onClick={handleToggle} className="tokenInfo">Exchanges</button><div> {Exchanges} </div></>
         
        )}
         <TokenInfo />
    <img src={Image} alt={Year}/>
    {Year}
    </div>

  )
}

export default Token;