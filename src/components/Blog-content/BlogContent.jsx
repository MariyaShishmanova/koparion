import React, { useState, useEffect } from 'react';
import SingleBlogPost from '../../components/Single-blog-post/SingleBlogPost';
import blogPosts from '../../data/blogPosts';
import Pagination from '../../components/Pagination/Pagination';

const POSTS_PER_PAGE = 6;

export default function BlogContent() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  // Get posts for the current page
  const currentPosts = blogPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  // Function to handle page changes
  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // scroll to the top of the page when current page changes
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [currentPage]
  );

  // Only render pagination if there are more than 1 page
  const showPagination = totalPages > 1;

  return (
    <div className="blog-content">
      {currentPosts.map((post, index) => <SingleBlogPost key={index} img={post.img} date={post.date} title={post.title} author={post.author} text={post.text} />)}

      {showPagination && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
    </div>
  );
}
