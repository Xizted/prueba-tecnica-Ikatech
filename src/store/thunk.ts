import { getProductsService } from '../services/products.services';
import {
  setProduct,
  setProducts,
  startLoadProducts,
} from './product/productSlice';

export const getProducts = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(startLoadProducts());

    const products = await getProductsService();
    dispatch(setProducts({ products }));
    dispatch(setProduct(0));
  };
};

