
import React from 'react';


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

    <h1>HI ....TONY</h1>
    
    </div>
  );
}

export default App;
