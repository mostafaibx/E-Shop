import { allCategories, allProducts } from "./fetchingProductsSlice";

export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    dispatch(allProducts(data));
  };
};
export const fetchCategories = () => {
  return async (dispatch) => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    dispatch(allCategories(data));
  };
};
