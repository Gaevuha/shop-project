import { createContext } from 'react';
import type { Product } from '../types/product';

export interface CartContextType {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  isInitialized: boolean;
   addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
