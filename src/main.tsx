import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './components/App/App';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import WishlistPage from './pages/WishlistPage';
import { CartProvider } from './context/CartProvider'; // 🔹 Імпорт провайдера
import { WishlistProvider } from './context/WishlistProvider';
const queryClient = new QueryClient();
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
      <WishlistProvider>
      <CartProvider> {/* 🔹 Обгортання всього застосунку */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="wishlist" element={<WishlistPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </CartProvider>
        </WishlistProvider>
    </QueryClientProvider>
  );
} else {
  console.error('❌ Не знайдено елемент з id="root" у index.html');
}
