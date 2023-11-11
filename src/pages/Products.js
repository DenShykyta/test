import { SearchBox } from "../components/SearchBox/SearchBox";
import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/ProductsList/ProductList";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductsThunk } from "../redux/products/productsThunk";
import { getProducts } from "../redux/products/productsSelectors";

const Products = () => {

  const dispatch = useDispatch();
//  const visibleContacts = useSelector(getFilteredContacts);
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);
  const products = useSelector(getProducts);
  

  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.title.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

    return (
        <main>
        <SearchBox value={productName} onChange={updateQueryString} />
        <ProductList products={visibleProducts} />
        </main>
    )
}

export default Products;