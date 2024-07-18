import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchForm() {
  return (
    <div className="header__search-form">
      <form action="#" className="search-form">
        <input type="search" value placeholder="Search our store" className="search-form__input" />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}
