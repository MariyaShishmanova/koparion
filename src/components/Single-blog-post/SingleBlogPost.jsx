import React, { useEffect } from 'react';
import { equalizeHeights } from '../../utils/equalizeHeight';

export default function SingleBlogPost({ img, title, author, text, date }) {
  useEffect(() => {
    equalizeHeights('.single-blog-post__title');
    equalizeHeights('.single-blog-post__author');
  }, []);

  return (
    <div className="single-blog-post">
      <a href="#">
        <div className="single-blog-post__date">
          {date}
        </div>

        <div className="single-blog-post__inner">
          <div className="single-blog-post__img">
            <div className="single-blog-post__img-wrap">
              <img src={img} alt="post-image" />
            </div>
          </div>

          <h3 className="single-blog-post__title">
            {title}
          </h3>

          <p className="single-blog-post__author">
            {author}
          </p>

          <p className="single-blog-post__text">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
}
