import React from 'react';
import Comment from './Comment';

function ComCon({commentInput, setCommentInput}) {
  
  return (
    <div>ComCon
        <Comment commentInput={commentInput} setCommentInput={setCommentInput} />
    </div>
  )
}

export default ComCon;