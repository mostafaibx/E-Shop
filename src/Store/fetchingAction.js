import { setError, setIsLoading } from "./Loading-ErrorSlice";
import {
  allCategories,
  allProducts,
  productsofCategory,
  searching,
  selectProduct,
} from "./fetchingProductsSlice";

async function fetchApiData(dispatch, url, successAction) {
  dispatch(setIsLoading(true));
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    dispatch(successAction(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setIsLoading(false));
  }
}

export const fetchProducts = (page) => {
  return async (dispatch) => {
    const url = `https://dummyjson.com/products?skip=${page || 0}`;
    await fetchApiData(dispatch, url, allProducts);
  };
};

export const fetchSelectedProduct = (productId) => {
  return async (dispatch) => {
    const url = `https://dummyjson.com/products/${productId}`;
    await fetchApiData(dispatch, url, selectProduct);
    dispatch(setIsLoading(true));
  };
};
export const fetchCategories = () => {
  return async (dispatch) => {
    const url = "https://dummyjson.com/products/categories";
    await fetchApiData(dispatch, url, allCategories);
  };
};
export const fetchSelectedCategory = (category) => {
  return async (dispatch) => {
    const url = `https://dummyjson.com/products/category/${category}`;
    await fetchApiData(dispatch, url, productsofCategory);
  };
};
export const fetchSearchResult = (searchText) => {
  return async (dispatch) => {
    const url = `https://dummyjson.com/products/search?q=${searchText}`;
    await fetchApiData(dispatch, url, searching);
  };
};
