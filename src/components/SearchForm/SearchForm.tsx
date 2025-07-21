import { useRef } from 'react';
import styles from './SearchForm.module.css';

interface Props {
  setSearchQuery: (value: string) => void;  // 🟩 додано
}

export default function SearchForm({ setSearchQuery }: Props) {  // 🟩 додано
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setSearchQuery('');  // 🟩 додано
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setSearchQuery(inputRef.current.value.trim());  // 🟩 додано
    }
  };

  return (
    <form className={styles['search-form']} onSubmit={handleSubmit}>  {/* 🟩 додано */}
      <input
        ref={inputRef}
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
