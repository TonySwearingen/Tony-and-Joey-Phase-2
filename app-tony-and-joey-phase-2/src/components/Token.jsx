
import React, { useState }from 'react'
import TokenInfo from './TokenInfo'


function Token({id, Name, Image, Year, onSelect}) {


  

     const [toggleform,setToggleRead] = useState(false)

     function handleRead(){
       setToggleRead( toggleform => !toggleform)
       onSelect(id)
     }

     

  return (
    <div>
      <h2>{Name}</h2>
     <> { toggleform ?
         (<>
         <img src={Image} alt={Name}></img>
         <button onClick={handleRead}> show Less</button>
         </>)
 : ( <button onClick={handleRead}>show More</button>
        )}
     </>
  );

     
      <p>{Year} </p>
    </div>

  )
}

export default Token;        