import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid } from 'swiper/modules';

import Product from '../Product/Product';
import productData from '../../data/products';

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
