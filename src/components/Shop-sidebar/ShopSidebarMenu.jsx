import React from 'react';

export default function ShopSidebarMenu({ title, children }) {
  return (
    <div className="shop-sidebar__menu">
      <h4 className="shop-sidebar__menu-title">
        {title}
      </h4>

      <ul className="shop-sidebar__list">
        {children}
      </ul>
    </div>
  );
}
