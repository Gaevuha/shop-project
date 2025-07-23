import { useWishlistContext } from '../hooks/useWishlistContext';
export function useWishlist() {
  const { wishlistItems } = useWishlistContext();
  return { wishlistItems };
}