import React from 'react';

export default function MenuItem({ children }) {
  return (
    <li className="header__menu-item">
      <a href="#">
        {children}
      </a>
    </li>
  );
}
