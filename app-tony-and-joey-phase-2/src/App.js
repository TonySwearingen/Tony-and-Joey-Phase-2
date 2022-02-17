import React, {useState, useEffect} from 'react';
import './App.css';
import ComCon from './components/ComCon';
import TokenCon from './components/TokenCon';
import TokenInfo from './components/TokenInfo'


function App() {
 const [cryptoArray, setCryptoArray] = useState([]);
 const [chosenTokenId, setChosenTokenId] = useState();
  

  useEffect (() => {
    fetch ('http://localhost:6001/coins')
    .then(res=>res.json())
    .then((data) => setCryptoArray(data))
  }, [])


  const findToken = cryptoArray.find(token => token.id === chosenTokenId)
console.log (findToken)
  
  return (
    <div className='app-container'>
      <TokenCon  cryptoArray={cryptoArray} />
      <TokenInfo {...findToken}/>
      <ComCon />
    </div>
  );
}

export default App;
