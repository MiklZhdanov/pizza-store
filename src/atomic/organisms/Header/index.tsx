import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'config/theme';
import { ContentWrapper } from 'atomic/templates/ContentWrapper';
import { Badge } from 'atomic/atoms/Badge';
import { Link } from 'react-router-dom';
import { AppState } from 'store';
import {getTotalItems} from 'modules/cart/utils';
import { logout } from 'modules/auth/actions';
import { CurrencySwitcher } from 'atomic/atoms/CurrencySwitcher';
import { selectCurrency } from 'modules/currency/actions';

interface IHeaderProps {
  className?: string;
}

const HeaderComponent: React.FunctionComponent<IHeaderProps> = ({className}) => {
  const { cart, user, currentCurrency } = useSelector((state: AppState) => ({
    cart: state.cart.selectedCart,
    loading: state.cart.loading,
    user: state.auth.currentUser,
    currentCurrency: state.currency.currentCurrency
  }))
  const dispatch = useDispatch();

  return <div className={className}>
    <ContentWrapper>
      <div className="header-wrapper">
        
          <div className="header-logo">
            <Link to={"/"}>
              PIZZA STORE
            </Link>
          </div>
        <div  className="header-currency">
          <CurrencySwitcher
            currentCurrency={currentCurrency}
            onChange={(currency)=>{
              dispatch(selectCurrency(currency));
            }}
          />
        </div>
        <div className="header-cart">
        <Link to={"/cart"}>
          <Badge text={cart && getTotalItems({cart})}>
            Cart
          </Badge>
        </Link>
        </div>

        <div className="header-auth">
          {user ? 
            <div onClick={()=>{
              dispatch(logout());
            }}>
              Log Out
            </div>
            :
            <Link to={"/login"}>
              Log In
            </Link>
          }
        </div>
        {user ? <div className="header-profile">
          <Link to={"/profile"}>
            {user.username}
          </Link> 
        </div>
        : null}
      </div>
    </ContentWrapper>
  </div>
};

export const Header = styled(HeaderComponent)`
  background: ${props => props.theme.colors.baseText};
  padding: 20px 0;
  position: sticky;
  top: 0px;
  color: ${props => props.theme.colors.white};
  z-index: 100;

  .header-wrapper{
    display: flex;
    justify-content: space-between;
  }

  .header-cart{
    display: inline-block;
    a{ color: ${props => props.theme.colors.white};}
  }
  .header-auth, .header-profile{
    cursor: pointer;
    display: inline-block;
    color: ${props => props.theme.colors.white};
    a{ color: ${props => props.theme.colors.white};} 
    margin-left: 30px;
  }
  .header-logo{
    flex-grow: 1;
    a{ 
      font-weight: 600;
    font-size: 24px;
      color: ${props => props.theme.colors.white};
    }
  }
  .header-currency{
    margin-right: 40px;
  }
`