import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadMoreBtn } from './Product.styled';

import SearchBox from '../SearchBox/SearchBox';
import Filter from '../Filter/Filter';
import ProductList from './ProductList';
import {
  getProductsThunk,
  getProductsByCategoryThunk,
  getProductsMoreThunk,
} from '../../redux/products/productsThunk';
import { getCategoriesThunk } from '../../redux/filter/filterThunk';
import { getProducts, getIsLoading } from '../../redux/products/selectors';
import { getCategories } from '../../redux/filter/selectors';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoading);
  const categories = useSelector(getCategories);
  const [skip, setSkip] = useState(30);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';
  const visibleProducts = products.filter(product =>
    product.title.toLowerCase().includes(productName.toLowerCase())
  );

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  const handleSelectChange = category => {
    dispatch(getProductsByCategoryThunk(category));
  };

  const handleResetClick = () => {
    dispatch(getProductsThunk());
  };

  const handleLoadMore = () => {
    if (skip > 90) {
      setSkip(30);
      return;
    }
    const increasedSkip = skip + 30;
    setSkip(increasedSkip);
    dispatch(getProductsMoreThunk(skip));
  };

  return (
    <main>
      <Filter
        categories={categories}
        onChange={handleSelectChange}
        onClick={handleResetClick}
      />
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />

      {isLoading ? (
        'Please waite!!!'
      ) : skip > 90 ? (
        <h2>There are no more products!</h2>
      ) : (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          LoadMore
        </LoadMoreBtn>
      )}
    </main>
  );
};

export default Products;
