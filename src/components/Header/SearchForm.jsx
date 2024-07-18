import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchForm() {
  return (
    <form action="#" className="header__search-form">
      <input type="search" placeholder="Search our store" className="header__search-form-input" />
      <button type="submit" className="header__search-form-submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
