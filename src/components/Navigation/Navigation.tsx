import NavItem from '../NavItem/NavItem';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav__list']}>
        <NavItem to="/" label="Дім" end />
        <NavItem to="/cart" label="Кошик" count={0} dataCountAttr="data-cart-count" />
        <NavItem to="/wishlist" label="Перелік бажань" count={0} dataCountAttr="data-wishlist-count" />
      </ul>
    </nav>
  );
}

