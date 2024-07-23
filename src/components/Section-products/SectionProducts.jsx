import React, { useState } from 'react';
import Section from '../Section/Section';
import SwiperProducts from '../Swiper-products/SwiperProducts';

export default function SectionProducts() {
  const [selectedCategory, setSelectedCategory] = useState('new-arrival');
  const [activeMenuItem, setActiveMenuItem] = useState('new-arrival');

  const handleMenuClick = category => {
    setSelectedCategory(category);
    setActiveMenuItem(category);
  };

  return (
    <Section className="section-products">
      <h2 className="section-products__title">TOP INTERESTING</h2>

      <p className="section-products__entry">Browse the collection of our best selling and top interesting products. You'll definitely find what you are looking for.</p>

      <ul className="section-products__menu">
        <li>
          <a
            href="#"
            className={activeMenuItem === 'new-arrival' ? 'active' : ''}
            onClick={e => {
              e.preventDefault();
              handleMenuClick('new-arrival');
            }}
          >
            NEW ARRIVAL
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeMenuItem === 'on-sale' ? 'active' : ''}
            onClick={e => {
              e.preventDefault();
              handleMenuClick('on-sale');
            }}
          >
            ON SALE
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeMenuItem === 'featured' ? 'active' : ''}
            onClick={e => {
              e.preventDefault();
              handleMenuClick('featured');
            }}
          >
            FEATURED PRODUCTS
          </a>
        </li>
      </ul>

      <div className="section-products__content">
        <SwiperProducts selectedCategory={selectedCategory} />
      </div>
    </Section>
  );
}
