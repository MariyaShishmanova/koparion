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

  // Function to get and update the header height
  function handleHeights() {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setCssProperty('--header-height', headerHeight);
    }
    setCssProperty('--viewport-height', window.innerHeight);
  }

  // Set initial viewport height and header height
  useEffect(() => {
    handleHeights();

    // update on window resize
    window.addEventListener('resize', handleHeights);

    return () => {
      window.removeEventListener('resize', handleHeights);
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

          <Menu />
        </div>
      </div>
    </header>
  );
}
