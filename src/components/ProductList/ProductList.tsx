import type { Product } from '../../types/product';
import styles from './ProductList.module.css';

interface Props {
  activeCategory: string;
  searchQuery: string;
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <ul className={styles.products}>
      {products.map(({ id, thumbnail, description, title, brand, category, price }) => (
        <li key={id} className={styles.products__item}>
          <img className={styles.products__image} src={thumbnail} alt={description} />
          <p className={styles.products__title}>{title}</p>
          <p className={styles.products__brand}>
            <span className={styles['products__brand--bold']}>Brand: {brand}</span>
          </p>
          <p className={styles.products__category}>Category: {category}</p>
          <p className={styles.products__price}>Price: {price} $</p>
        </li>
      ))}
    </ul>
  );
}