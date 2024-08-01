import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogContent from "../components/Blog-content/BlogContent";


function Blog() {
  return (
    <>
      <div className="blog">
        <div className="container">
        <div className="blog__inner">
          <div className="blog-sidebar">
           <div className="blog-sidebar__search">
             <h3 className="blog-sidebar__title">search</h3>

              <form className="blog-sidebar__search">
                <input type="search" placeholder="Search our store" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </form>
            </div>
          </div>
      
          <BlogContent />
        </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
