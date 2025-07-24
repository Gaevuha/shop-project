import React, { useState, useEffect, type ReactNode } from 'react';
import { CartContext } from './cartContext';
import type { Product } from '../types/product';

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setIsInitialized(true); // лише тут!
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

    // ✅ Додаємо функцію
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const exists = prevItems.some(p => p.id === product.id);
      return exists ? prevItems : [...prevItems, product];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, isInitialized, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
