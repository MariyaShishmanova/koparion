import Section from '../Section/Section';
import SingleBlogPost from '../Single-blog-post/SingleBlogPost';
import blogPostImg1 from '../../assets/blog-img1.png';
import blogPostImg2 from '../../assets/blog-img2.png';
import blogPostImg3 from '../../assets/blog-img3.png';

export default function SectionBlog() {
  return (
    <Section className="section-blog">
      <h3 className="section-blog__title">latest from our blog</h3>

      <div className="section-blog__content">
        <SingleBlogPost img={blogPostImg1} date="24 OCT" title="Temporibus autem quibusdam" author="Maria Shishmanova" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis..." />

        <SingleBlogPost img={blogPostImg2} date="24 OCT" title="The Standard Chunk Of Lorem Ipsum Used Since" author="Maria Molduvanova" text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making..." />

        <SingleBlogPost
          img={blogPostImg3}
          date="24 OCT"
          title="It is a long established fact that a reader will"
          author="John Smith"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making..."
        />
      </div>
    </Section>
  );
}
