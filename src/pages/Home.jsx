import BannerArea from '../components/Banner/BannerArea';
import SectionHero from '../components/Section-hero/SectionHero';
import SectionProducts from '../components/Section-products/SectionProducts';
import SingleImageBanner from '../components/SingleImage-banner/SingleImageBanner';
import SectionBestSeller from '../components/Section-best-seller/SectionBestSeller';
import SectionPromotions from '../components/Section-promotions/SectionPromotions';
import SectionReviews from '../components/Section-reviews/SectionReviews';
import SectionBlog from '../components/Section-blog/SectionBlog';

function Home() {
  return (
    <>
      <BannerArea />
      <SectionHero />
      <SectionProducts />
      <SingleImageBanner />
      <SectionBestSeller />
      <SectionPromotions />
      <SectionReviews />
      <SectionBlog />
    </>
  );
}

export default Home;
