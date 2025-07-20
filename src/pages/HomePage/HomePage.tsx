import { useEffect, useState } from 'react';
import { fetchCategory } from '../../services/productService';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Всі');


  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategory();
        // Додаємо категорію "Всі" на початок масиву
        setCategories(['Всі', ...data]);
      } catch {
        setError('Не вдалося завантажити категорії');
      }
    };

    loadCategories();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        {error && <p style={{ color: 'red' }}>{error}</p>}
     <ul className={styles.categories}>
  {categories.map(category => (
    <li key={category} className={styles.categories__item}>
      <button
        type="button"
        onClick={() => setActiveCategory(category)}
        className={`${styles.categories__btn} ${
          activeCategory === category ? styles['categories__btn--active'] : ''
        }`}
      >
        {category}
      </button>
    </li>
  ))}
</ul>


      </div>
    </section>
  );
}
