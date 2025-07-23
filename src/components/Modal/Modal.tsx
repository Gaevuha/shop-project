import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { Product } from '../../types/product';
import styles from './Modal.module.css';

interface ModalProps {
  product: Product;
  onClose: () => void;
}

export default function Modal({ product, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className={`${styles.modal} ${styles['modal--is-open']}`}
      onClick={onClose}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.modal__closeBtn}
          onClick={onClose}
          type="button"
        ></button>

        <div className={styles.modalProduct}>
          <img
            className={styles.modalProduct__img}
            src={product.thumbnail}
            alt={product.description}
          />
          <div className={styles.modalProduct__content}>
            <p className={styles.modalProduct__title}>{product.title}</p>
            <ul className={styles.modalProduct__tags}>
              <li className={styles.modalProduct__tag}>{product.category}</li>
              <li className={styles.modalProduct__tag}>{product.brand}</li>
            </ul>
            <p className={styles.modalProduct__description}>{product.description}</p>
            <p className={styles.modalProduct__shippingInformation}>
              Shipping: Ships overnight
            </p>
            <p className={styles.modalProduct__returnPolicy}>
              Return Policy: No return policy
            </p>
            <p className={styles.modalProduct__price}>
              Price: {product.price} $
            </p>
            <button className={styles.modalProduct__buyBtn} type="button">
              Buy
            </button>
          </div>
        </div>

        <div className={styles.modalProduct__actions}>
          <button
            className={`${styles.modalProduct__btn} ${styles['modalProduct__btn--wishlist']}`}
            type="button"
          >
            Add to Wishlist
          </button>
          <button
            className={`${styles.modalProduct__btn} ${styles['modalProduct__btn--cart']}`}
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
