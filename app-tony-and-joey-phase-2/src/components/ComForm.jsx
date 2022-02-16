import React, {useEffect, useState} from 'react'

function ComForm({handleSubmit, setCommentInput, commentInput}) {

  

  
  

    
  

  function handleCommentChange(e) {
    e.preventDefault();
    setCommentInput(e.target.value);
  }

  return (
    <div>
      <form className="commentbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="comment"
          placeholder="Comments"
          value={commentInput}
          onChange={handleCommentChange}
        />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default ComForm;
