import React from 'react'

function ComForm({handleSubmit, setCommentInput, commentInput}) {

  return (
    <div>
      <form className="commentbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="comment"
          placeholder="Comments"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default ComForm;
