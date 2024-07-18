import CurrencySelect from './CurrencySelect';
import AccountArea from './AccountArea';
import SearchForm from './SearchForm';
import Menu from './Menu';
import Cart from './Cart';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__bar">
            <CurrencySelect />

            <AccountArea />
          </div>

          <div className="header__body">
            <SearchForm />

            <div className="header__logo">
              <a href="#" className="logo">
                <img src="logo_300x.png" alt="logo" />
              </a>
            </div>

            <Cart />
          </div>

          <Menu />
        </div>
      </div>
    </header>
  );
}
