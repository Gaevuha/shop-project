import { useCart } from '../../hooks/useCart';
import styles from './CartPage.module.css';
import Loader from '../../components/Loader/Loader';

export default function CartPage() {
  const { cartItems } = useCart();
  const isLoading = false;

  const hasNoProducts = cartItems.length === 0;
  const totalCount = cartItems.length;
  const totalPrice = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.productPage}`}>
        <main>
          {isLoading && <Loader />}
          {!isLoading && hasNoProducts && (
            <div className={styles.notFound}>
              <h2 className={styles.notFoundTitle}>Товари не знайдено</h2>
            </div>
          )}
          {!isLoading && !hasNoProducts && (
            <ul className={styles.products}>
              {cartItems.map(product => (
                <li
                  key={product.id}
                  className={styles.products__item}
                  // onClick={() => openModal(product)} якщо потрібно
                >
                  <img
                    className={styles.products__image}
                    src={product.thumbnail}
                    alt={product.description}
                  />
                  <p className={styles.products__title}>{product.title}</p>
                  <p className={styles.products__brand}>
                    <span className={styles['products__brand--bold']}>
                      Brand: {product.brand}
                    </span>
                  </p>
                  <p className={styles.products__category}>
                    Category: {product.category}
                  </p>
                  <p className={styles.products__price}>
                    Price: {product.price} $
                  </p>
                </li>
              ))}
            </ul>
          )}
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.cartSummary}>
            <h2 className={styles.cartSummaryTitle}>Ваше замовлення</h2>
            <ul className={styles.cartSummaryList}>
              <li>
                <span>Кількість:</span> <span>{totalCount}</span>
              </li>
              <li>
                <span>Всього:</span> <span>${totalPrice}</span>
              </li>
              <li>
                <span>Доставка:</span> <span>Безкоштовно</span>
              </li>
            </ul>
            <button className={styles.cartSummaryBtn}>Купити</button>
          </div>
        </aside>
      </div>
    </section>
  );
}
