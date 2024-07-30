import React from 'react';
import Section from '../Section/Section';
import bestSeller from '../../assets/best-seller.png';
import SwiperProducts from '../Swiper-products/SwiperProducts';
import 'swiper/css/grid';

export default function SectionBestSeller() {
  const customSwiperConfig = {
    grid: {
      rows: 2,
      fill: 'row'
    },
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2
      }
    },
    loop: false // Disable loop
  };

  return (
    <Section className="section-best-seller">
      <div className="section-best-seller__text">
        <h3 className="section-best-seller__subtitle">Author best selling</h3>

        <div className="section-best-seller__text-body">
          <h2 className="section-best-seller__title">J. K. Rowling</h2>

          <p className="section-best-seller__categories">
            categories:
            <a href="#">Books</a>,
            <a href="#">Audiobooks</a>
          </p>

          <p className="section-best-seller__entry">
            Vestibulum porttitor iaculis gravida. Praesent vestibulum varius placerat. Cras tempor congue neque, id aliquam orci finibus sit amet. Fusce at facilisis arcu. Donec aliquet nulla id turpis semper, a bibendum metus vulputate. Suspendisse potenti.
          </p>

          <div className="section-best-seller__socials">
            {/* socials */}
          </div>
        </div>
      </div>

      <div className="section-best-seller__img">
        <img src={bestSeller} alt="author-img" />
      </div>

      <div className="section-best-seller__slider">
        <SwiperProducts showAll customSwiperConfig={customSwiperConfig} />
      </div>
    </Section>
  );
}
