import React from 'react';
import ShopSidebarMenu from './ShopSidebarMenu';
import ShopSidebarMenuItem from './ShopSidebarMenuItem';

export default function ShopSidebar() {
  return (
    <div className="shop-sidebar">
      <ShopSidebarMenu title="Availability">
        <ShopSidebarMenuItem type="checkbox" name="availability" id="filter-in-stock" label="In stock" />
        <ShopSidebarMenuItem type="checkbox" name="availability" id="filter-out-of-stock" label="Out of stock" />
      </ShopSidebarMenu>

      <ShopSidebarMenu title="Price">
        <li className="shop-sidebar__price-filter">
          <span>$</span>
          <input type="number" name="price-from" id="price-from" value="0" />
          <span>to</span>
          <span>$</span>
          <input type="number" name="price-to" id="price-to" value="110" />
          <button className="btn" type="submit" value="Filter">
            Filter
          </button>
        </li>
      </ShopSidebarMenu>

      <ShopSidebarMenu title="Product type">
        <ShopSidebarMenuItem type="checkbox" name="product-type" id="type-1" label="Type 1" />
        <ShopSidebarMenuItem type="checkbox" name="product-type" id="type-2" label="Type 2" />
        <ShopSidebarMenuItem type="checkbox" name="product-type" id="type-3" label="Type 3" />
        <ShopSidebarMenuItem type="checkbox" name="product-type" id="type-4" label="Type 4" />
      </ShopSidebarMenu>

      <ShopSidebarMenu title="Brand">
        <ShopSidebarMenuItem type="checkbox" name="brand" id="vendor-1" label="Vendor 1" />
        <ShopSidebarMenuItem type="checkbox" name="brand" id="vendor-2" label="Vendor 2" />
        <ShopSidebarMenuItem type="checkbox" name="brand" id="vendor-3" label="Vendor 3" />
        <ShopSidebarMenuItem type="checkbox" name="brand" id="vendor-4" label="Vendor 4" />
      </ShopSidebarMenu>
    </div>
  );
}
