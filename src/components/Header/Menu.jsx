export default function Menu() {
  return (
    <div className="header__menu">
      <p className="header__menu-title">Menu</p>
      <ul className="header__menu-list">
        <li className="header__menu-item">
          <a href="#">home</a>
        </li>

        <li className="header__menu-item">
          <a href="#">shop</a>
        </li>

        <li className="header__menu-item">
          <a href="#">product</a>
        </li>

        <li className="header__menu-item">
          <a href="#">blog</a>
        </li>
      </ul>
    </div>
  );
}
