
import React, { useState }from 'react'
import TokenInfo from './TokenInfo'


function Token({id, Name, Image, Year,}) {


  

     const [toggleform,setToggleRead] = useState(false)

     function handleRead(){
       setToggleRead( toggleform => !toggleform)
     }

  

  return (
    <div>
      <h2>{Name}</h2>
     <> { toggleform ?(<><button onClick={handleRead}>
        <img src={Image} alt={Name}></img>
      </button><>
        </><TokenInfo /></>
        ) : ( <button onClick={handleRead}>show less</button>
        )}
     </>
  );

     
      <p>{Year} </p>
    </div>

  )
}

export default Token;        