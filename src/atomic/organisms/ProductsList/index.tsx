import * as React from 'react';
import { styled } from 'config/theme';
import { ProductType } from 'modules/products/types';
import { CartType } from 'modules/cart/types';
import { Product } from 'atomic/molucules/Product' ;
import { getProductQuantity } from 'modules/cart/utils';

interface IProductsListProps {
  className?: string;
  products: ProductType[];
  cart?: CartType;
  addToCart({id, quantity}: {id: number, quantity: number}): void;
}

const ProductsListComponent: React.FunctionComponent<IProductsListProps> = ({className, products, cart, addToCart}) => {

  return <div className={className}>
      {products.map(product =>  <Product key={product.id} quantity={getProductQuantity({product, cart})} product={product} addToCart={addToCart}/>)}
  </div>
};

export const ProductsList = styled(ProductsListComponent)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`