import SingleBlogPost from '../Single-blog-post/SingleBlogPost';
import blogPosts from '../../data/blogPosts';

export default function RecentPosts() {
  const latestPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <div className="blog-sidebar__recent-posts">
      <h3 className="blog-sidebar__title">recent posts</h3>

      <ul className="blog-sidebar__recent-posts-list">
        {latestPosts.map((post, index) => <SingleBlogPost key={index} img={post.img} date={post.date} title={post.title} equalize={false} />)}
      </ul>
    </div>
  );
}
