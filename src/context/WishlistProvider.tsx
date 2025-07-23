import { useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/product';
import { WishlistContext } from './wishlistContext';
import type { WishlistContextType } from '../types/wishlistTypes';

interface WishlistProviderProps {
  children: ReactNode;
}

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlistItems(prev => {
      if (prev.find(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id.toString() !== id));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const contextValue: WishlistContextType = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
}
