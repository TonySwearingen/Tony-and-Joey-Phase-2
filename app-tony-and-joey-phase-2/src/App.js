import React, {useState, useEffect} from 'react';
import './App.css';
import ComCon from './components/ComCon';
import TokenCon from './components/TokenCon';
import ComForm from './components/ComForm';


function App() {

  const [cryptoArray, setCryptoArray] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  

  useEffect (() => {
    fetch ('http://localhost:6001/coins')
    .then(res=>res.json())
    .then((data) => setCryptoArray(data))
  }, [])

  // function handleAddComment(newComment) {
   
  //   setCommentInput(newComment)
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const commentData = {content: commentInput}
    const newComment = [...commentInput, commentData]
    
    setCommentInput("")
    fetch("http://localhost:6001/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
    .then(res => res.json())
    .then(newComment)

  }

 
  
  return (
    <div>

      <ComCon />
      <TokenCon  cryptoArray={cryptoArray} />
      <ComForm 
      handleSubmit={handleSubmit} 
      commentInput={commentInput} 
      setCommentInput={setCommentInput}
      />
        
    </div>
  );
}

export default App;
