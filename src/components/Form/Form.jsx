import React from 'react';

export default function Form({ newComment, handleCommentChange, handleCommentSubmit }) {
  return (
    <form className="detailed-blog-post__comments-form form" onSubmit={handleCommentSubmit}>
      <h3 className="form__title detailed-blog-post__comments-title">Leave a comment</h3>

      <div className="form__field">
        <label className="form__field-title">Comment</label>
        <textarea className="form__field-input" name="text" value={newComment.text} onChange={handleCommentChange} placeholder="Message" required />
      </div>

      <div className="form__field">
        <label className="form__field-title">Name</label>
        <input className="form__field-input" type="text" name="name" value={newComment.name} onChange={handleCommentChange} placeholder="Name" required />
      </div>

      <button className="btn" type="submit">
        Post comment
      </button>
    </form>
  );
}
