import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export const fetchCategory = async () => {
  try {
    const endPoint = '/category-list'; // якщо тобі потрібен саме цей
    const result = await axios.get(endPoint);
    console.log('Категорії:', result.data);
    return result.data;
  } catch (error) {
  if (error instanceof Error) {
    console.error('Помилка при завантаженні категорій:', error.message);
  } else {
    console.error('Сталася невідома помилка:', error);
  }
  throw error;
}
};

