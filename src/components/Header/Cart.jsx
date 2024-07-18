import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  return (
    <div className="header__cart">
      <a href="#">
        <FontAwesomeIcon icon={faCartShopping} />
        My cart
      </a>

      <span className="header__cart-counter">0</span>
    </div>
  );
}
