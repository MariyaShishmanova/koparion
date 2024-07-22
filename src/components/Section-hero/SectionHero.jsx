import Section from '../Section/Section';
import 'animate.css';

export default function SectionHero() {
  return (
    <Section className="section-hero">
      <h2 className="section-hero__subtitle animate__animated animate__fadeInLeft">Huge Sale</h2>

      <h1 className="section-hero__title animate__animated animate__fadeInRight animate__delay-1s">Koparion</h1>

      <p className="section-hero__entry animate__animated animate__fadeInDownBig animate__delay-1s">Now starting at £99.00</p>

      <div className="section-hero__actions animate__animated animate__fadeInDownBig animate__delay-1s">
        <a href="#" className="btn btn--filled">
          Shop now
        </a>
      </div>
    </Section>
  );
}
