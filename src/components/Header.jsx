import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__bar">
            <div className="currency">
              <div className="currency__current">
                <a href="#">
                  <span>USD</span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </a>
              </div>

              <ul className="currency__list">
                <li className="currency__item active">
                  <a href="#">USD - US Dollar</a>
                </li>

                <li className="currency__item">
                  <a href="#">EUR - Euro</a>
                </li>

                <li className="currency__item">
                  <a href="#">BGN - BG Lev</a>
                </li>
              </ul>
            </div>

            <ul className="account__area">
              <li>
                <a href="#">My Account</a>
              </li>

              <li>
                <a href="#">Checkout</a>
              </li>

              <li>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
