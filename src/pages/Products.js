import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBox from "../components/SearchBox/SearchBox";
import Filter from "../components/Filter/Filter";
import ProductList from "../components/Products/ProductList";
import {
  getProductsThunk,
  getProductsByCategoryThunk,
} from "../redux/products/productsThunk";
import { getCategoriesThunk } from "../redux/products/filterThunk";
import {
  getProducts,
  getCategories,
} from "../redux/products/productsSelectors";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  const products = useSelector(getProducts);
  const categories = useSelector(getCategories);

  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.title.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };
  const handleSelectChange = (category) => {
    dispatch(getProductsByCategoryThunk(category));
  };

  const handleResetClick = () => {
    dispatch(getProductsThunk());
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
    </main>
  );
};

export default Products;
