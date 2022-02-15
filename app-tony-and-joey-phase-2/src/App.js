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


  // useEffect (() => {
  //   fetch ('http://localhost:6001/comments')
  //   .then(res=>res.json())
  //   .then(setCommentInput)
  // }, [])

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <div>

      <ComCon setCommentInput={setCommentInput} commentInput={commentInput} />
      <TokenCon  cryptoArray={cryptoArray} />
      <ComForm handleSubmit={handleSubmit} setcommentInput={setCommentInput} commentInput={commentInput} />
        
    </div>
  );
}

export default App;
