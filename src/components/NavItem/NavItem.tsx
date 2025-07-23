import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

interface NavItemProps {
  to: string;
  label: string;
  count?: number;             // лічильник опціональний
  dataCountAttr?: string;
  end?: boolean;
}

export default function NavItem({ to, label, count, dataCountAttr, end }: NavItemProps) {
  // Виводимо 0, якщо count === 0, або null/undefined — не показуємо лічильник
  const showCount = typeof count === 'number';

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
        {showCount && (
          <span className={styles['nav__count']} {...(dataCountAttr ? { [dataCountAttr]: true } : {})}>
            {count}
          </span>
        )}
      </NavLink>
    </li>
  );
}
