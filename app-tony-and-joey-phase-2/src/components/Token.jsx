
<<<<<<< HEAD
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
    <img src={Image} alt={Year}/>
    {Year}
    </div>

=======
function Token({Name, Image, Year}) {
 
  return (
    <div>
      This is {Name}
      <p>{Year}</p>
      {/* <button onClick={handlebitcoinBtn} className="BitcoinButton"><img src={Image} alt={Year}/></button> */}

      </div>
>>>>>>> 7b635e43cd1c593b9411cec1c9a7bc8a5601e7cb
  )
}

export default Token;