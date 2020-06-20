import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'config/theme';
import {ProductsList} from 'atomic/organisms/ProductsList';
import { AppState } from 'store';
import {addProductToCart} from 'modules/cart/actions';

interface IMainPageProps {
  className?: string;
}

const MainPageComponent: React.FunctionComponent<IMainPageProps> = ({className}) => {
    const { products, cart } = useSelector((state: AppState) => ({
        products: state.products.items,
        loading: state.products.loading,
        cart: state.cart.selectedCart,
      }))
      const dispatch = useDispatch();
  return <div className={className}>
      <ProductsList cart={cart} products={products} addToCart={(data)=>{
        dispatch(addProductToCart(data))
      }}/>
  </div>
};

export const MainPage = styled(MainPageComponent)`
`