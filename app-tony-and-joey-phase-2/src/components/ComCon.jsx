import React, {useState, useEffect} from 'react';
import ComForm from './ComForm';
import Comment from './Comment';

function ComCon() {
  const [commentArray, setCommentArray] = useState([]);
  const [commentInput, setCommentInput] = useState(""); 

  const comment = commentArray.map(comments => <Comment key={comments.id} {...comments}/>)

  useEffect (() => {
    fetch ('http://localhost:6001/comments')
    .then(res=>res.json())
    .then((data) => setCommentArray(data))
  }, [])

  
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
    .then(comment => setCommentArray([...commentArray, comment]))

  }

  
  return (
    <div className='comment-container'>
      {comment}
      <ComForm 
      handleSubmit={handleSubmit} 
      commentInput={commentInput} 
      setCommentInput={setCommentInput}
      />        
    </div>
  )
}

export default ComCon;