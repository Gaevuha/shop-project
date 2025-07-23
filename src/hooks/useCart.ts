import { useCartContext } from './useCartContext';
import type { Product } from '../types/product';

export function useCart() {
  const { cartItems, setCartItems } = useCartContext();

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id.toString() !== id));
  };

  return { cartItems, addToCart, removeFromCart };
}
