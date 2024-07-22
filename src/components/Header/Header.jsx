import { useEffect, useRef } from 'react';

import CurrencySelect from './CurrencySelect';
import AccountArea from './AccountArea';
import SearchForm from './SearchForm';
import Menu from './Menu';
import Cart from './Cart';

export default function Header() {
  const headerRef = useRef(null);

  // Function to set CSS properties
  function setCssProperty(property, value, unit = 'px') {
    if (!property || value === undefined) {
      throw new Error('Both property and value are required');
    }
    document.documentElement.style.setProperty(property, `${value}${unit}`);
  }

  // Function to set the header menu nav top
  function setHeaderMenuNavTop() {
    if (headerRef.current) {
      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      if (headerBottom < 56) {
        setCssProperty('--header-menu-nav-top', 56);
      } else {
        setCssProperty('--header-menu-nav-top', headerBottom);
      }
    }
  }

  useEffect(() => {
    setHeaderMenuNavTop();
    // Update on window scroll
    window.addEventListener('scroll', setHeaderMenuNavTop);
    // Update on window resize
    window.addEventListener('resize', setHeaderMenuNavTop);

    return () => {
      window.removeEventListener('scroll', setHeaderMenuNavTop);
      window.removeEventListener('resize', setHeaderMenuNavTop);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header__inner">
          <div className="header__bar">
            <CurrencySelect />
            <AccountArea />
          </div>
          <div className="header__body">
            <SearchForm />
            <div className="header__logo logo">
              <a href="#">
                <img src="logo_300x.png" alt="logo" />
              </a>
            </div>
            <Cart />
          </div>
          <Menu onToggleMenu={setHeaderMenuNavTop} />
        </div>
      </div>
    </header>
  );
}
