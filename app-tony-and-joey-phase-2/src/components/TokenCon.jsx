import React from 'react';
import Token from './Token';

function TokenCon({cryptoArray}) {

  console.log(cryptoArray);
  

  const token = cryptoArray.map(tokens => <Token key={tokens.id} {...tokens}/>)

  return (
    <ul className="tokens">
      {token}
    </ul>
  )
}

export default TokenCon;