import Section from '../Section/Section';
import SwiperProducts from '../Swiper-products/SwiperProducts';

export default function SectionProducts() {
  return (
    <Section className="section-products">
      <h2 className="section-products__title">TOP INTERESTING</h2>

      <p className="section-products__entry">Browse the collection of our best selling and top interesting products. ll definitely find what you are looking for..</p>

      <ul className="section-products__menu">
        <li>
          <a href="#">NEW ARRIVAL</a>
        </li>

        <li>
          <a href="#">ON SALE</a>
        </li>

        <li>
          <a href="#">FEATURED PRODUCTS</a>
        </li>
      </ul>

      <div className="section-products__content">
        <SwiperProducts />
      </div>
    </Section>
  );
}
