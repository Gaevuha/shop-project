import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  return (
    <label className={styles.theme}>
      Тема
      <input className="visually-hidden" type="checkbox" />
      <span className={styles['theme-toggle']}></span>
    </label>
  );
}
