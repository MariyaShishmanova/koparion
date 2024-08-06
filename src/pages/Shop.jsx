import React from 'react';
import ShopSidebar from '../components/Shop-sidebar/ShopSidebar';
import ShopContent from '../components/Shop-content/ShopContent';

export default function Shop() {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__inner">
          <ShopSidebar />

          <ShopContent />
        </div>
      </div>
    </div>
  );
}
