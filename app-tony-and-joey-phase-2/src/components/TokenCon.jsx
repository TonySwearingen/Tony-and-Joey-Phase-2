import React from 'react';
import Token from './Token';

function TokenCon({cryptoArray}) {

  

  const token = cryptoArray.map(tokens => <Token key={tokens.id} {...tokens}/>)

  return (
    <div className='token-container'>
      <ul className="tokens">
        {token}
      </ul>
    </div>
    
  )
}

export default TokenCon;