import banner from '../../assets/banner.png';

export default function SingleImageBanner() {
  return (
    <div className="single-banner">
      <div className="container">
        <div className="single-banner__inner">
          <a href="#">
            <div className="single-banner__text">
              <h3 className="single-banner__subtitle">G. Meyer Books & Spiritual Traveler Press</h3>

              <h2 className="single-banner__title">Sale up to 30% off</h2>
            </div>

            <div className="single-banner__img">
              <img src={banner} alt="banner-image" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
