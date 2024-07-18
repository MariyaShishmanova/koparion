import { useState, useEffect } from 'react';

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  useEffect(
    () => {
      if (isActive) {
        document.body.classList.add('mobile-nav-visible');
      } else {
        document.body.classList.remove('mobile-nav-visible');
      }

      return () => {
        document.body.classList.remove('mobile-nav-visible');
      };
    },
    [isActive]
  );

  function toggleMenu() {
    setIsActive(!isActive);
  }

  return (
    <div className="header__menu">
      <p className="header__menu-title">Menu</p>

      <button className={`btn btn-nav ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span />
      </button>

      <div className="header__menu-nav">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <a href="#">home</a>
          </li>

          <li className="header__menu-item">
            <a href="#">shop</a>
          </li>

          <li className="header__menu-item">
            <a href="#">product</a>
          </li>

          <li className="header__menu-item">
            <a href="#">blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
