import Section from '../Section/Section';
import SwiperProducts from '../Swiper-products/SwiperProducts';

export default function SectionFeatured() {
  return (
    <Section className="section-featured">
      <h2 className="section-featured__title">FEATURED BOOKS</h2>

      <div className="section-featured__content">
        <SwiperProducts showAll={true} />
      </div>
    </Section>
  );
}
