import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { equalizeHeights } from '../../utils/equalizeHeight';

export default function SingleBlogPost({ id, img, title, author, text, date, showReadMore = true }) {
  useEffect(() => {
    equalizeHeights('.single-blog-post__title');
    equalizeHeights('.single-blog-post__author');
  }, []);

  return (
    <div className="single-blog-post">
      <div className="single-blog-post__date">
        {date}
      </div>
      <div className="single-blog-post__inner">
        <div className="single-blog-post__img-wrap">
          <Link to={`/blog/post/${id}`} className="single-blog-post__img">
            <img src={img} alt={title} />
          </Link>
        </div>
        <h3 className="single-blog-post__title">
          <Link to={`/blog/post/${id}`}>
            {title}
          </Link>
        </h3>
        <p className="single-blog-post__author">
          {author}
        </p>
        <p className="single-blog-post__text">
          {text}
        </p>
        {showReadMore &&
          <Link to={`/blog/post/${id}`} className="single-blog-post__read-more">
            Read more
          </Link>}
      </div>
    </div>
  );
}
