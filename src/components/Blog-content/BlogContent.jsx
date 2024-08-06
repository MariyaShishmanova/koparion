import React from 'react';
import SingleBlogPost from '../../components/Single-blog-post/SingleBlogPost';
import PaginatedList from '../Pagination/PaginatedList';

const POSTS_PER_PAGE = 6;

export default function BlogContent({ posts, searchQuery, selectedTopic }) {
  if (!posts) {
    return <div>Loading...</div>;
  }

  const filteredPosts = posts.filter(post => {
    const matchesTopic = selectedTopic ? post.topic === selectedTopic : true;
    const matchesSearchQuery = searchQuery ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesTopic && matchesSearchQuery;
  });

  return (
    <div className="blog-content">
      <PaginatedList
        items={filteredPosts}
        itemsPerPage={POSTS_PER_PAGE}
        renderItems={items =>
          items.length > 0 ? items.map(post => <SingleBlogPost key={post.id} id={post.id} img={post.img} date={post.date} title={post.title} author={post.author} text={post.text} showReadMore={true} />) : <h3 className="blog-content__no-items-title">Sorry, no posts matched your search</h3>}
      />
    </div>
  );
}
