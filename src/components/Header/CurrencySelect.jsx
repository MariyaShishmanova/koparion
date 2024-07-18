import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function CurrencySelect() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  function handleCurrencyClick(event) {
    const currency = event.target.getAttribute('data-currency');
    if (currency) {
      setSelectedCurrency(currency);
    }
  }

  return (
    <div className="header__currency">
      <div className="header__currency-current">
        <a href="#">
          <span>
            {selectedCurrency}
          </span>
          <FontAwesomeIcon icon={faAngleDown} />
        </a>
      </div>

      <ul className="header__currency-list" onClick={handleCurrencyClick}>
        <li className="header__currency-item active">
          <a href="#" data-currency="USD">
            USD - US Dollar
          </a>
        </li>
        <li className="header__currency-item">
          <a href="#" data-currency="EUR">
            EUR - Euro
          </a>
        </li>
        <li className="header__currency-item">
          <a href="#" data-currency="BGN">
            BGN - Lev
          </a>
        </li>
      </ul>
    </div>
  );
}
