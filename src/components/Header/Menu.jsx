import { useState, useEffect, useRef, useCallback } from 'react';
import MenuItem from './MenuItem';

export default function Menu({ onToggleMenu }) {
  const [isActive, setIsActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const menuRef = useRef(null);
  const originalPositionRef = useRef(null);
  const listRef = useRef(null);
  const navRef = useRef(null);

  const calculateMenuListHeight = useCallback(() => {
    if (listRef.current) {
      const listHeight = listRef.current.offsetHeight;
      if (navRef.current && window.innerWidth < 768) {
        navRef.current.style.height = `${listHeight + 50}px`;
      } else {
        navRef.current.style.height = '';
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const menuTop = menuRef.current.getBoundingClientRect().top;
        const scrollY = window.scrollY || window.pageYOffset;

        if (originalPositionRef.current === null) {
          originalPositionRef.current = scrollY + menuTop;
        }

        if (scrollY > originalPositionRef.current) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  useEffect(
    () => {
      const handleResize = () => {
        calculateMenuListHeight();
        onToggleMenu(); // Call the parent function to update --header-menu-nav-top
      };

      window.addEventListener('resize', handleResize);

      // Call the function initially to set the height correctly
      calculateMenuListHeight();
      onToggleMenu(); // Call the parent function to set --header-menu-nav-top

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    [calculateMenuListHeight, onToggleMenu]
  );

  const toggleMenu = () => {
    setIsActive(!isActive);
    calculateMenuListHeight();
    onToggleMenu(); // Call the parent function to update --header-menu-nav-top
  };

  return (
    <div className={`header__menu ${isFixed ? 'fixed' : ''}`} ref={menuRef}>
      <p className="header__menu-title">Menu</p>

      <button className={`btn btn-nav ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span />
      </button>

      <div className="header__menu-nav" ref={navRef}>
        <ul className="header__menu-list" ref={listRef}>
          <MenuItem to="/">home</MenuItem>
          <MenuItem>shop</MenuItem>
          <MenuItem>product</MenuItem>
          <MenuItem to="/blog">blog</MenuItem>
        </ul>
      </div>
    </div>
  );
}
