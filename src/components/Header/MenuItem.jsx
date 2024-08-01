import { Link } from 'react-router-dom';

export default function MenuItem({ to, children }) {
  return (
    <li className="header__menu-item">
      <Link to={to}>
        {children}
      </Link>
    </li>
  );
}
