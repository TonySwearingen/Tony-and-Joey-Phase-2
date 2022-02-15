import React from 'react';
import Token from './Token';

function TokenCon({cryptoArray}) {

<<<<<<< HEAD
=======
  
>>>>>>> 7b635e43cd1c593b9411cec1c9a7bc8a5601e7cb
  

  const token = cryptoArray.map(tokens => <Token key={tokens.id} {...tokens}/>)

  return (
    <ul className="tokens">
      {token}
    </ul>
  )
}

export default TokenCon;