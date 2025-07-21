import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUserTheme, updateUserTheme } from '../../services/themeService';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const queryClient = useQueryClient();

  const { data: theme = 'light', isLoading } = useQuery({
    queryKey: ['theme'],
    queryFn: fetchUserTheme,
  });

  const mutation = useMutation({
    mutationFn: updateUserTheme,
    onSuccess: (newTheme) => {
      queryClient.setQueryData(['theme'], newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    },
  });

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    mutation.mutate(newTheme);
  };

  if (isLoading) return <p>Завантаження теми...</p>;

  return (
    <label className={styles.theme}>
      Тема
      <input
        className="visually-hidden"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleToggle}
      />
      <span className={styles['theme-toggle']}></span>
    </label>
  );
}
