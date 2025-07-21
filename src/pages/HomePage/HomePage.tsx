import { useState, useEffect } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useOutletContext } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import ProductList from '../../components/ProductList/ProductList';
import Pagination from '../../components/Pagination/Pagination';

import {
  fetchCategory,
  fetchProducts,
  fetchProductsByCategory,
  searchUserProducts,
} from '../../services/productService';

import styles from './HomePage.module.css';

const ITEMS_PER_PAGE = 12;

interface OutletContextType {
  searchQuery: string;
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('Всі');
  const [currentPage, setCurrentPage] = useState(1);

  const { searchQuery } = useOutletContext<OutletContextType>();
  const trimmedSearchQuery = searchQuery.trim();

  // Скидаємо сторінку при зміні категорії
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, trimmedSearchQuery]);

  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategory,
  });

  const {
    data: productsData,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useQuery({
    queryKey: ['products', activeCategory, trimmedSearchQuery, currentPage],
    queryFn: () => {
      if (trimmedSearchQuery) {
        return searchUserProducts(trimmedSearchQuery, currentPage);
      }
      if (activeCategory === 'Всі') {
        return fetchProducts(currentPage);
      }
      return fetchProductsByCategory(activeCategory, currentPage);
    },
    placeholderData: keepPreviousData,
  });

  const isLoading = isLoadingCategories || isLoadingProducts;
  const isError = isErrorCategories || isErrorProducts;

  if (isError) return <p>❌ Помилка при завантаженні даних</p>;

  return (
    <section className={styles.section}>
      <div className="container">
        {isLoading && <Loader />}

        {!isLoading && (
          <>
            <CategoryFilter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              categories={['Всі', ...categories]}
            />

            <ProductList
              activeCategory={activeCategory}
              searchQuery={searchQuery}
              products={productsData?.products || []}
            />

            {productsData && productsData.total > ITEMS_PER_PAGE && (
              <Pagination
                totalItems={productsData.total}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
