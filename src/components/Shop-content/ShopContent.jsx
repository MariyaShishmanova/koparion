import React from 'react';
import shopImg from '../../assets/shop-img.png';
import productData from '../../data/products';
import Product from '../Product/Product';
import PaginatedList from '../Pagination/PaginatedList';

const PRODUCTS_PER_PAGE = 12;

export default function ShopContent({ availability, priceRange, productTypes, brands }) {
  const filterProducts = () => {
    return productData.filter(product => {
      const isAvailable = availability.length === 0 || availability.includes(product.availability);
      const productPrice = typeof product.price === 'string' ? parseFloat(product.price.replace('$', '')) : product.price;
      const isInPriceRange = productPrice >= priceRange[0] && productPrice <= priceRange[1];
      const isProductType = productTypes.length === 0 || productTypes.includes(product.type);
      const isBrand = brands.length === 0 || brands.includes(product.brand);

      return isAvailable && isInPriceRange && isProductType && isBrand;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div className="shop-content">
      <div className="shop-content__img">
        <img src={shopImg} alt="man with a book" />
      </div>

      <h2 className="shop-content__title">Products</h2>

      <div className="shop-content__list">
        {filteredProducts.length === 0
          ? <h3 className="shop-content__title-no-items">No items available based on the search criteria</h3>
          : <PaginatedList items={filteredProducts} itemsPerPage={PRODUCTS_PER_PAGE} renderItems={items => items.map((product, index) => <Product key={index} name={product.name} price={product.price} img={product.img} href={product.href} />)} />}
      </div>
    </div>
  );
}
