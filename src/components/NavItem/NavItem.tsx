import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css'

interface NavItemProps {
  to: string;
  label: string;
  count?: number;
  dataCountAttr?: string;
  end?: boolean;
}

export default function NavItem({ to, label, count, dataCountAttr, end }: NavItemProps) {
  return (
    <li className={styles['nav__item']}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${styles['nav__link']} ${styles['nav__link--active']}`
            : styles['nav__link']
        }
        end={end}
      >
        {label}
        {typeof count === 'number' && (
          <span className={styles['nav__count']} {...(dataCountAttr ? { [dataCountAttr]: true } : {})}>
            {count}
          </span>
        )}
      </NavLink>
    </li>
  );
}
