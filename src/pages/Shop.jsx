import React, { useState } from 'react';
import ShopSidebar from '../components/Shop-sidebar/ShopSidebar';
import ShopContent from '../components/Shop-content/ShopContent';

export default function Shop() {
  // Initialize filter state
  const [availability, setAvailability] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [productTypes, setProductTypes] = useState([]);
  const [brands, setBrands] = useState([]);

  return (
    <div className="shop">
      <div className="container">
        <div className="shop__inner">
          <ShopSidebar setAvailability={setAvailability} priceRange={priceRange} setPriceRange={setPriceRange} setProductTypes={setProductTypes} setBrands={setBrands} />
          <ShopContent availability={availability} priceRange={priceRange} productTypes={productTypes} brands={brands} />
        </div>
      </div>
    </div>
  );
}
