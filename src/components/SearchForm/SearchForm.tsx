import styles from './SearchForm.module.css';
import { useRef } from 'react';

export default function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus(); // опціонально
    }
  };

  return (
 <form className={styles['search-form']}>
      <input
        
            ref={inputRef} // Прив'язка ref         
            className={styles['search-form__input']}
            type="text"
            name="searchValue"
            placeholder="Введіть назву товару"
          />
          <button
            type="button"
            className={styles['search-form__btn-clear']}
            aria-label="Clear search"
            onClick={handleClear}
          >
            ×
          </button>
          <button className={styles['search-form__btn']} type="submit">
            Пошук
          </button>
        </form>
  );
}