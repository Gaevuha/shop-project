import { createContext } from 'react';
import type { WishlistContextType } from '../types/wishlistTypes';

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
