import React from 'react';

export default function ShopSidebarMenuItem({ id, name, label, type }) {
  return (
    <li className="shop-sidebar__list-item">
      <input type={type} id={id} name={name} />
      <label htmlFor={id} className="shop-sidebar__list-item-title">
        {label}
      </label>
    </li>
  );
}
