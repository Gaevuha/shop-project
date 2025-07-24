import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { Product } from '../../types/product';
import styles from './Modal.module.css';
import { useCart } from '../../hooks/useCart';

interface ModalProps {
  product: Product;
  onClose: () => void;
}

export default function Modal({ product, onClose }: ModalProps) {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

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

  const handleCartClick = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return ReactDOM.createPortal(
    <div className={`${styles.modal} ${styles['modal--is-open']}`} onClick={onClose}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modal__closeBtn} onClick={onClose} type="button"></button>

        <div className={styles.modalProduct}>
          <img className={styles.modalProduct__img} src={product.thumbnail} alt={product.description} />
          <div className={styles.modalProduct__content}>
            <p className={styles.modalProduct__title}>{product.title}</p>
            <ul className={styles.modalProduct__tags}>
              <li className={styles.modalProduct__tag}>{product.category}</li>
              <li className={styles.modalProduct__tag}>{product.brand}</li>
            </ul>
            <p className={styles.modalProduct__description}>{product.description}</p>
            <p className={styles.modalProduct__price}>Price: {product.price} $</p>
          </div>
        </div>

        <div className={styles.modalProduct__actions}>
          <button
            className={`${styles.modalProduct__btn} ${styles['modalProduct__btn--cart']}`}
            type="button"
            onClick={handleCartClick}
          >
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
