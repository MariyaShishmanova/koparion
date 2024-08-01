import blogPosts from '../../data/blogPosts';
import SingleBlogPost from '../Single-blog-post/SingleBlogPost';
import RecentPosts from './RecentPosts';
import Search from './Search';
import Topics from './Topics';

export default function BlogSidebar() {
  const latestPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <div className="blog-sidebar">
      <Search />

      <Topics />

      <RecentPosts />
    </div>
  );
}
