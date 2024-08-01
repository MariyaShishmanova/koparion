import { Link } from 'react-router-dom';

export default function MenuItem({ to, children, isActive, onClick }) {
  return (
    <li className={`header__menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <Link to={to}>
        {children}
      </Link>
    </li>
  );
}
