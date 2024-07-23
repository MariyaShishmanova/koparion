import React from 'react';
import { faMagnifyingGlassPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Product({ img, name, price, href }) {
  return (
    <div className="product">
      <a href={href}>
        <div className="product__img">
          <img src={img} alt="product-img" />
          <div className="product__img-quick-view">
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          </div>
        </div>
        <div className="product__descr">
          <h5 className="product__title">
            {name}
          </h5>
          <div className="product__price">
            <div className="product__price-cost">
              {price}
            </div>
            <button className="product__price-add-link">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
