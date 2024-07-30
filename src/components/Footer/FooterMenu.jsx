export default function FooterMenu({ title, items }) {
  return (
    <div className="footer__menu">
      <h2 className="footer__title">
        {title}
      </h2>

      <ul className="footer__menu-list">
        {items.map((item, index) =>
          <li key={index} className="footer__menu-item">
            <a href="#">
              {item}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
