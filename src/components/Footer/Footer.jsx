import paymentImg from '../../assets/payment-img.png';
import FooterMenu from './FooterMenu';

const productsMenuItems = ['About us', 'Price drop', 'New products', 'Best sales'];
const companyMenuItems = ['Contact us', 'Site map', 'Stores', 'My account'];
const accountMenuItems = ['Address', 'Credit slips', 'Orders', 'Personal info'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top-bar">
            <ul>
              <li>
                <a href="#">Privacy and Cookie Policy</a>
              </li>

              <li>
                <a href="#">Contact Us</a>
              </li>

              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer__body">
            <div className="footer__menu-wrap">
              <FooterMenu title="products" items={productsMenuItems} />
              <FooterMenu title="our company" items={companyMenuItems} />
              <FooterMenu title="your account" items={accountMenuItems} />

              <div className="footer__contacts">
                <h2 className="footer__title">store information</h2>

                <div className="footer__address">
                  <p className="footer__address-title">My Company</p>
                  42 avenue des Champs Elysées 75000 Paris France
                </div>

                <p className="footer__tel">
                  <a href="tel:555555555">Call us now: 55555555555</a>
                </p>

                <p className="footer__email">
                  <a href="mailto:shishmanova.mariya@gmail.com" target="blank">
                    <span>Еmail: </span>
                    shishmanova.mariya@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="footer__bottom-bar">
            <p className="copyright">&copy; 2024 Koparion. All rights reserved. </p>

            <div className="payment-methods">
              <img src={paymentImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
