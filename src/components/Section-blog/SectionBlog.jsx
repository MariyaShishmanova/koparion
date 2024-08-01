import Section from '../Section/Section';
import SingleBlogPost from '../Single-blog-post/SingleBlogPost';
import blogPosts from '../../data/blogPosts';

export default function SectionBlog() {
  const latestPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <Section className="section-blog">
      <h3 className="section-blog__title">latest from our blog</h3>

      <div className="section-blog__content">
        {latestPosts.map((post, index) => <SingleBlogPost key={index} img={post.img} date={post.date} title={post.title} author={post.author} text={post.text} />)}
      </div>
    </Section>
  );
}
