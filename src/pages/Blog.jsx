import BlogContent from "../components/Blog-content/BlogContent";
import BlogSidebar from "../components/Blog-sidebar/BlogSidebar";


function Blog() {
  return (
    <>
      <div className="blog">
        <div className="container">
        <div className="blog__inner">
          <BlogSidebar />
      
          <BlogContent />
        </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
