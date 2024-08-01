import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Search() {
  return (
    <div className="blog-sidebar__search">
      <h3 className="blog-sidebar__title">search</h3>

      <form className="blog-sidebar__search">
        <input type="search" placeholder="Search our store" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
    </div>
  );
}
