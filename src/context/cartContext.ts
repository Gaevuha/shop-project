import React from 'react';
import type { Product } from '../types/product';

export interface CartContextType {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartContext = React.createContext<CartContextType | undefined>(undefined);
