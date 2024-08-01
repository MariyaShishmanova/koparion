import RecentPosts from './RecentPosts';
import Search from './Search';
import Topics from './Topics';

export default function BlogSidebar({ setSearchQuery, setSelectedTopic }) {
  return (
    <div className="blog-sidebar">
      <Search setSearchQuery={setSearchQuery} />

      <Topics setSelectedTopic={setSelectedTopic} />

      <RecentPosts />
    </div>
  );
}
