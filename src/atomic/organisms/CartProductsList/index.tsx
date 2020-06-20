import * as React from 'react';
import { styled } from 'config/theme';
import { ProductType } from 'modules/products/types';
import { CartType } from 'modules/cart/types';
import { CartProduct } from 'atomic/molucules/CartProduct' ;
import { getProductQuantity } from 'modules/cart/utils';

interface ICartProductsListProps {
  className?: string;
  products: ProductType[];
  cart: CartType;
  addToCart({id, quantity}: {id: number, quantity: number}): void;
}

const CartProductsListComponent: React.FunctionComponent<ICartProductsListProps> = ({className, products, cart, addToCart}) => {

  return <div className={className}>
      {products.map(product =>  <CartProduct key={product.id} quantity={getProductQuantity({product, cart})} product={product} addToCart={addToCart}/>)}
  </div>
};

export const CartProductsList = styled(CartProductsListComponent)`
  margin-top: 20px;
`