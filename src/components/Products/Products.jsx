import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Product from '../Product/Product';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';
import product7 from '../../assets/product7.png';
import product8 from '../../assets/product8.png';

export default function Products() {
  const productData = [
    { name: 'Product dummy title', price: '$42.99', img: product1 },
    { name: 'Dummy text for title', price: '$42.59', img: product2 },
    { name: 'Product title here', price: '$22.99', img: product3 },
    { name: 'Product dummy title', price: '$33.99', img: product4 },
    { name: 'Product dummy title', price: '$13.99', img: product5 },
    { name: 'Product dummy title', price: '$43.99', img: product6 },
    { name: 'Product dummy title', price: '$3.99', img: product7 },
    { name: 'Product dummy title', price: '$37.99', img: product8 }
  ];

  return (
    <Swiper
      spaceBetween={30}
      navigation
      loop={true}
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        }
      }}
    >
      {productData.map((product, index) =>
        <SwiperSlide key={index}>
          <Product name={product.name} price={product.price} img={product.img} />
        </SwiperSlide>
      )}
    </Swiper>
  );
}
