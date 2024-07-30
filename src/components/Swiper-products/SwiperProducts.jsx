import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid } from 'swiper/modules';

import Product from '../Product/Product';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';
import product7 from '../../assets/product7.png';
import product8 from '../../assets/product8.png';
import product9 from '../../assets/product9.png';
import product10 from '../../assets/product10.png';
import product11 from '../../assets/product11.png';
import product12 from '../../assets/product12.png';

const productData = [
  { name: 'Product dummy title', price: '$42.99', img: product1, category: 'new-arrival', href: '#' },
  { name: 'Dummy text for title', price: '$42.59', img: product2, category: 'on-sale', href: '#' },
  { name: 'Product title here', price: '$22.99', img: product3, category: 'featured', href: '#' },
  { name: 'Product dummy title', price: '$33.99', img: product4, category: 'new-arrival', href: '#' },
  { name: 'Product dummy title', price: '$13.99', img: product5, category: 'on-sale', href: '#' },
  { name: 'Product dummy title', price: '$43.99', img: product6, category: 'featured', href: '#' },
  { name: 'Product dummy title', price: '$3.99', img: product7, category: 'new-arrival', href: '#' },
  { name: 'Product dummy title', price: '$37.99', img: product8, category: 'on-sale', href: '#' },
  { name: 'Product dummy title', price: '$43.99', img: product9, category: 'featured', href: '#' },
  { name: 'Product dummy title', price: '$42.99', img: product10, category: 'new-arrival', href: '#' },
  { name: 'Dummy text for title', price: '$42.59', img: product11, category: 'on-sale', href: '#' },
  { name: 'Product title here', price: '$22.99', img: product12, category: 'featured', href: '#' },
  { name: 'Product dummy title', price: '$42.99', img: product10, category: 'new-arrival', href: '#' },
  { name: 'Dummy text for title', price: '$42.59', img: product11, category: 'on-sale', href: '#' },
  { name: 'Product title here', price: '$22.99', img: product12, category: 'featured', href: '#' }
];

export default function SwiperProducts({ selectedCategory, showAll, customSwiperConfig }) {
  const filteredProducts = showAll ? productData : productData.filter(product => product.category === selectedCategory);

  const defaultSwiperConfig = {
    spaceBetween: 30,
    navigation: true,
    effect: 'slide',
    speed: 800,
    loop: true,
    modules: [Navigation, Grid],
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      }
    }
  };

  const swiperConfig = { ...defaultSwiperConfig, ...customSwiperConfig };

  return (
    <Swiper {...swiperConfig}>
      {filteredProducts.map((product, index) =>
        <SwiperSlide key={index}>
          <Product name={product.name} price={product.price} img={product.img} href={product.href} />
        </SwiperSlide>
      )}
    </Swiper>
  );
}
