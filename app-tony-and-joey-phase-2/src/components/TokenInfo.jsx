import React, {useState} from 'react'

function TokenInfo({Definition, Exchanges, Image, Year, handleToken}) {
  const [toggleLike, setToggleLike] = useState(true)

  function handleToggle(){
    setToggleLike( Definition => !Definition)
  }

  return (
   <>
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
      </div><img src={'https://media2.giphy.com/media/n59dQcO9yaaaY/giphy.gif?cid=790b761137b5dc381718c646e373c6c0e62ac6a21cd34f6b&rid=giphy.gif&ct=g'} alt="loading..." />
    </>
  )
}

export default TokenInfo;
