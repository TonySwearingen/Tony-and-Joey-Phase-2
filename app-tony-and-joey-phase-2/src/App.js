<<<<<<< Updated upstream
import React, {useState, useEffect} from 'react';
import './App.css';
import ComCon from './components/ComCon';
import TokenCon from './components/TokenCon';
import ComForm from './components/ComForm';
=======

import React from 'react';
>>>>>>> Stashed changes


function App() {

  const [cryptoArray, setCryptoArray] = useState([])
  const [commentInput, setCommentInput] = useState("")

  useEffect (() => {
    fetch ('http://localhost:6001/coins')
    .then(res=>res.json())
    .then(setCryptoArray)
  }, [])


  useEffect (() => {
    fetch ('http://localhost:6001/comments')
    .then(res=>res.json())
    .then(setCommentInput)
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
<<<<<<< Updated upstream
      <ComCon setCommentInput={setCommentInput} commentInput={commentInput} />
      <TokenCon  cryptoArray={cryptoArray} />
      <ComForm handleSubmit={handleSubmit} setcommentInput={setCommentInput} commentInput={commentInput} />
    <h1>HI TONY</h1>
=======

    <h1>HI ....TONY</h1>
    
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
