import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailedBlogPost({ posts }) {
  const { id } = useParams();

  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <h3 className="blog-sidebar__title">Post not found</h3>;
  }

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

        {/* Render comments here */}
      </div>
    </div>
  );
}
