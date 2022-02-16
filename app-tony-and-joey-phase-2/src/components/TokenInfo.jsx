import React, {useState} from 'react'

function TokenInfo({Definition, Exchanges}) {
  const [toggleLike, setToggleLike] = useState(true)

  function handleToggle(){
    setToggleLike( Definition => !Definition)
  }

  return (
    <div className="info-container">
       {toggleLike ? (
        <>
          <button onClick={handleToggle} className="tokenInfoActive">Info </button>
          <div> {Definition}</div>
        </>
      ) : (
        <>
          <button onClick={handleToggle} className="tokenInfo">Exchanges</button>
          <div> {Exchanges} </div> 
        </>  
      )}
    </div>
  )
}

export default TokenInfo