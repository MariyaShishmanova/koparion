import React from 'react';
import ShopSidebarMenu from './ShopSidebarMenu';
import ShopSidebarMenuItem from './ShopSidebarMenuItem';

export default function ShopSidebar({ setAvailability, priceRange, setPriceRange, setProductTypes, setBrands }) {
  const handleAvailabilityChange = e => {
    const { id, checked } = e.target;
    setAvailability(prev => (checked ? [...prev, id] : prev.filter(item => item !== id)));
  };

  const handlePriceChange = e => {
    const { name, value } = e.target;
    setPriceRange(prev => (name === 'price-from' ? [parseFloat(value), prev[1]] : [prev[0], parseFloat(value)]));
  };

  const handleProductTypeChange = e => {
    const { id, checked } = e.target;
    setProductTypes(prev => (checked ? [...prev, id] : prev.filter(item => item !== id)));
  };

  const handleBrandChange = e => {
    const { id, checked } = e.target;
    setBrands(prev => (checked ? [...prev, id] : prev.filter(item => item !== id)));
  };

  return (
    <div className="shop-sidebar">
      <ShopSidebarMenu title="Availability">
        <ShopSidebarMenuItem type="checkbox" name="availability" id="in-stock" label="In stock" onChange={handleAvailabilityChange} />
        <ShopSidebarMenuItem type="checkbox" name="availability" id="out-of-stock" label="Out of stock" onChange={handleAvailabilityChange} />
      </ShopSidebarMenu>

      <ShopSidebarMenu title="Price">
        <li className="shop-sidebar__price-filter">
          <span>$</span>
          <input type="number" name="price-from" id="price-from" value={priceRange[0]} onChange={handlePriceChange} />
          <span>to</span>
          <span>$</span>
          <input type="number" name="price-to" id="price-to" value={priceRange[1]} onChange={handlePriceChange} />
        </li>
      </ShopSidebarMenu>

      <ShopSidebarMenu title="Product type">
        <ShopSidebarMenuItem type="checkbox" name="product-type" id="Type 1" label="Type 1" onChange={handleProductTypeChange} />
        <ShopSidebarMenuItem type="checkbox" name="product-type" id="Type 2" label="Type 2" onChange={handleProductTypeChange} />
        <ShopSidebarMenuItem type="checkbox" name="product-type" id="Type 3" label="Type 3" onChange={handleProductTypeChange} />
        <ShopSidebarMenuItem type="checkbox" name="product-type" id="Type 4" label="Type 4" onChange={handleProductTypeChange} />
      </ShopSidebarMenu>

      <ShopSidebarMenu title="Brand">
        <ShopSidebarMenuItem type="checkbox" name="brand" id="Vendor 1" label="Vendor 1" onChange={handleBrandChange} />
        <ShopSidebarMenuItem type="checkbox" name="brand" id="Vendor 2" label="Vendor 2" onChange={handleBrandChange} />
        <ShopSidebarMenuItem type="checkbox" name="brand" id="Vendor 3" label="Vendor 3" onChange={handleBrandChange} />
        <ShopSidebarMenuItem type="checkbox" name="brand" id="Vendor 4" label="Vendor 4" onChange={handleBrandChange} />
      </ShopSidebarMenu>
    </div>
  );
}
