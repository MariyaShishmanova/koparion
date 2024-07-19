import Banner from './Banner';
import bannerImg1 from '../../assets/banner-img1.png';
import bannerImg2 from '../../assets/banner-img2.png';
import bannerImg3 from '../../assets/banner-img3.png';
import bannerImg4 from '../../assets/banner-img4.png';

export default function BannerArea() {
  return (
    <ul className="banner-area">
      <div className="container">
        <div className="banner-area__inner">
          <Banner img={bannerImg1} title="Free shipping item" entry="For all orders over $500" />
          <Banner img={bannerImg2} title="Money back guarantee" entry="100% money back guarantee" />
          <Banner img={bannerImg3} title="Cash on delivery" entry="Lorem ipsum dolor consecte" />
          <Banner img={bannerImg4} title="Help & Support" entry="Call us : 123.456.789" />
        </div>
      </div>
    </ul>
  );
}
