import React, {useState, useEffect} from 'react';
import './App.css';
import ComCon from './components/ComCon';
import TokenCon from './components/TokenCon';
import ComForm from './components/ComForm';


function App() {

  const [cryptoArray, setCryptoArray] = useState([])

  useEffect (() => {
    fetch ('http://localhost:6001/coins')
    .then(res=>res.json())
    .then(setCryptoArray)
  }, [])

  return (
    <div>
      <ComCon />
      <TokenCon  cryptoArray={cryptoArray} />
      <ComForm />
    <h1>HI TONY</h1>
    </div>
  );
}

export default App;
