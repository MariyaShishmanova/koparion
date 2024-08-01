import { useState } from 'react';
import BlogContent from '../components/Blog-content/BlogContent';
import BlogSidebar from '../components/Blog-sidebar/BlogSidebar';
import blogPosts from '../data/blogPosts';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  // function to filter blog posts
  const filterPosts = () => {
    return blogPosts.filter(post => {
      const matchesSearchQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTopic = selectedTopic ? post.topic.includes(selectedTopic) : true;
      return matchesSearchQuery && matchesTopic;
    });
  };

  const filteredPosts = filterPosts();

  return (
    <div className="blog">
      <div className="container">
        <div className="blog__inner">
          <BlogSidebar setSearchQuery={setSearchQuery} setSelectedTopic={setSelectedTopic} />
          <BlogContent posts={filteredPosts} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
