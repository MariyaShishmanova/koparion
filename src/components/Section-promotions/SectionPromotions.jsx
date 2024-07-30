import Section from '../Section/Section';
import promoBook1 from '../../assets/promo-book1.png';
import promoBook2 from '../../assets/promo-book2.png';

export default function SectionPromotions() {
  return (
    <Section className="section-promotions">
      <div className="section-promotions__banner">
        <a href="#">
          <img src={promoBook1} alt="book-image" />
        </a>
      </div>

      <div className="section-promotions__banner">
        <a href="#">
          <img src={promoBook2} alt="book-image" />
        </a>
      </div>
    </Section>
  );
}
