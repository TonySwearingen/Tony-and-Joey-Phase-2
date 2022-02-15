import React, {useState, useEffect} from 'react';
import './App.css';
import ComCon from './components/ComCon';
import TokenCon from './components/TokenCon';
import ComForm from './components/ComForm';


function App() {

  const [cryptoArray, setCryptoArray] = useState([])
  const [commentInput, setCommentInput] = useState("")

  useEffect (() => {
    fetch ('http://localhost:6001/coins')
    .then(res=>res.json())
    .then(setCryptoArray)
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    console.log("working");
  }

  return (
    <div>
      <ComCon />
      <TokenCon  cryptoArray={cryptoArray} />
      <ComForm handleSubmit={handleSubmit} setcommentInput={setCommentInput} commentInput={commentInput} />
    <h1>HI TONY</h1>
    </div>
  );
}

export default App;
