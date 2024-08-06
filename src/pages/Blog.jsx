import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogContent from '../components/Blog-content/BlogContent';
import DetailedBlogPost from '../components/DetailedBlogPost/DetailedBlogPost';
import BlogSidebar from '../components/Blog-sidebar/BlogSidebar';

const Blog = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  return (
    <div className="blog">
      <div className="container">
        <div className="blog__inner">
          <BlogSidebar setSearchQuery={setSearchQuery} setSelectedTopic={setSelectedTopic} />
          <Routes>
            <Route path="/" element={<BlogContent posts={posts} searchQuery={searchQuery} selectedTopic={selectedTopic} />} />
            <Route path="post/:id" element={posts ? <DetailedBlogPost posts={posts} /> : <div>Loading...</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Blog;
