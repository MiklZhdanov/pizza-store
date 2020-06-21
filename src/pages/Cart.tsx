import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'config/theme';
import {CartProductsList} from 'atomic/organisms/CartProductsList';
import { AppState } from 'store';
import {addProductToCart, updateCart} from 'modules/cart/actions';
import { getTotalSum } from 'modules/cart/utils';
import { usePrice } from 'modules/currency/utils';
import { Link } from 'react-router-dom';
import { Button } from 'atomic/atoms/Button';
import { push } from 'connected-react-router';


interface ICartPageProps {
  className?: string;
}

const CartPageComponent: React.FunctionComponent<ICartPageProps> = ({className}) => {
    const { products, cart } = useSelector((state: AppState) => ({
        products: state.products.items,
        loading: state.products.loading,
        cart: state.cart.selectedCart,
      }))
      const dispatch = useDispatch();
  const { getPriceWithCurrency } = usePrice();
  return <div className={className}>
    {cart && cart.items.length ? <>
      <CartProductsList cart={cart} products={products} addToCart={(data)=>{
        dispatch(addProductToCart(data))
      }}/>
      <div className="cart-buttons">
        <div className="cart-clen-up">
          <Button text="Empty cart" onClick={()=>{
            dispatch(updateCart({id:cart.id, items:[] }))
          }}/>
        </div>
        <div className="cart-total">
          {`Total: ${getPriceWithCurrency({price: getTotalSum({products, cart})})}`}
        </div>
        <Button text="Checkout" onClick={()=>{
          dispatch(push("/checkout"))
        }}/>
      </div>
      </>
      : <div className="cart-empty">
        You cart is empty :(  <br/>
        {`Continue shopping `}<Link to={"/"}>here!</Link>
      </div>}
  </div>
};

export const CartPage = styled(CartPageComponent)`
  .cart-empty{
    font-size: 36px;
    line-height: 42px;
    margin: 40px auto;
    color: ${props => props.theme.colors.baseText};
    a{
      font-size: 36px;
      color: ${props => props.theme.colors.baseText};
      text-decoration: underline;
    }
  }
  .cart-buttons{
    margin-top: 10px;
    border-top: 1px solid ${props => props.theme.colors.alto};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 0;
    .cart-total{
      margin-right: 20px;
    }
    .cart-clen-up{
      flex-grow: 1;
    }
  }
`