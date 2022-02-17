import React, { useState }from 'react';


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
         <button onClick={handleRead}> Show Less</button>
         </>)
 : ( <button onClick={handleRead}>Show More</button>
        )}
     </>
  );

     
      <p>{Year} </p>
    </div>

  )
 } 

export default Token;