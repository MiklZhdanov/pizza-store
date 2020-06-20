export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export type ProductsStateType = {
    items: ProductType[];
    loading: boolean;
} 

const moduleName = '@@products';

export const ProductsActionTypes = {
  GET_PRODUCTS_REQUEST: `${moduleName}/GET_PRODUCTS_REQUEST`,
  GET_PRODUCTS_SUCCESS: `${moduleName}/GET_PRODUCTS_SUCCESS`,
  GET_PRODUCTS_FAILURE: `${moduleName}/GET_PRODUCTS_FAILURE`,

  GET_PRODUCT_REQUEST: `${moduleName}/GET_PRODUCT_REQUEST`,
  GET_PRODUCT_SUCCESS: `${moduleName}/GET_PRODUCT_SUCCESS`,
  GET_PRODUCT_FAILURE: `${moduleName}/GET_PRODUCT_FAILURE`
};
