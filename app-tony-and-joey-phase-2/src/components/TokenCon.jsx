import React from 'react';
import Token from './Token';

function TokenCon({cryptoArray, handleToken}) {

  

  const token = cryptoArray.map(tokens => <Token onSelect={handleToken} key={tokens.id} {...tokens}/>)

  return (
    <div className='token-container'>
      <ul className="tokens">
        {token}
      </ul>
    </div>
    
  )
}

export default TokenCon;