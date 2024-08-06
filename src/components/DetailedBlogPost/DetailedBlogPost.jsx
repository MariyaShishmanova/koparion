import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import commentImg from '../../assets/comment-img.png';
import Form from '../Form/Form';

export default function DetailedBlogPost({ posts }) {
  const { id } = useParams();

  const post = posts.find(post => post.id === parseInt(id));

  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState({ name: '', text: '' });

  if (!post) {
    return <h3 className="blog-sidebar__title">Post not found</h3>;
  }

  const handleCommentChange = e => {
    const { name, value } = e.target;
    setNewComment(prevComment => ({ ...prevComment, [name]: value }));
  };

  const handleCommentSubmit = e => {
    e.preventDefault();
    if (newComment.name.trim() && newComment.text.trim()) {
      const comment = {
        id: comments.length + 1,
        name: newComment.name,
        text: newComment.text,
        date: new Date().toLocaleString()
      };
      setComments([...comments, comment]);
      setNewComment({ name: '', text: '' });
    }
  };

  return (
    <div className="detailed-blog-post">
      <div className="detailed-blog-post__img">
        <img src={post.img} alt={post.title} />
      </div>

      <h2 className="detailed-blog-post__title">
        {post.title}
      </h2>

      <p dangerouslySetInnerHTML={{ __html: post.text }} className="detailed-blog-post__text" />

      <div className="detailed-blog-post__comments">
        <h2 className="detailed-blog-post__comments-title">Comments</h2>
        {comments.length > 0
          ? comments.map(comment =>
              <div key={comment.id} className="detailed-blog-post__comment">
                <div className="detailed-blog-post__comment-img">
                  <img src={commentImg} alt="avatar-photo" />
                </div>

                <div className="detailed-blog-post__comment-body">
                  <h4 className="detailed-blog-post__comment-name">
                    {comment.name}
                  </h4>
                  <p className="detailed-blog-post__comment-date">
                    {comment.date}
                  </p>
                  <p className="detailed-blog-post__comment-entry">
                    {comment.text}
                  </p>
                </div>
              </div>
            )
          : <p className="detailed-blog-post__comments-none">No comments yet</p>}

        <Form newComment={newComment} handleCommentChange={handleCommentChange} handleCommentSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
}
