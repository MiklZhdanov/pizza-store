import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "config/theme";
import { AppState } from "store";
import { Redirect } from "react-router-dom";
import { CheckoutForm } from "atomic/organisms/forms/CheckoutForm";
import { usePrice } from "modules/currency/utils";
import { getTotalSum, getTotalItems } from "modules/cart/utils";
import { checkoutCart } from "modules/cart/actions";

interface ICheckoutPageProps {
  className?: string;
}

const CheckoutPageComponent: React.FunctionComponent<ICheckoutPageProps> = ({
  className,
}) => {
  const { cart, deliveries, user, products, checkoutSuccess } = useSelector(
    (state: AppState) => ({
      products: state.products.items,
      user: state.auth.currentUser,
      cart: state.cart.selectedCart,
      checkoutSuccess: state.cart.checkoutSuccess,
      deliveries: state.delivery.items,
    })
  );

  const [delivery, setDelivery] = useState("");
  const dispatch = useDispatch();
  const { getPriceWithCurrency } = usePrice();

  return (
    <div className={className}>
      {checkoutSuccess ? (
        <div className="checkout-wrapper">
          <div className="checkout-wrapper-success">
            Success! You order <b>№{checkoutSuccess}</b> received. We start cooking
            your pizza!!!
          </div>
        </div>
      ) : (
        <>
          {cart && cart.items.length ? (
            <>
              <div className="checkout-wrapper">
                <div className="checkout-form">
                  <CheckoutForm
                    initialValues={{
                      email: user?.email || "",
                      address: user?.address || "",
                      delivery: "",
                    }}
                    deliveries={deliveries}
                    onChangeDelivery={(delivery) => {
                      setDelivery(delivery);
                    }}
                    onSubmit={(data) => {
                      dispatch(checkoutCart({ cart, ...data }));
                      console.log("data", data);
                    }}
                  />
                </div>
                <div className="checkout-info">
                  <div className="checkout-info-item">
                    <span>{`Total sum: `}</span>
                    <b>
                      {getPriceWithCurrency({
                        price:
                          getTotalSum({ products, cart }) +
                          (deliveries.find((item) => item.name === delivery)
                            ?.price || 0),
                      })}
                    </b>
                  </div>
                  <div className="checkout-info-item">
                    <span>{`Items: `}</span>
                    <b>{getTotalItems({ cart })}</b>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Redirect to="/cart" />
          )}
        </>
      )}
    </div>
  );
};

export const CheckoutPage = styled(CheckoutPageComponent)`
  .checkout-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    &-success {
      margin-top: 40px;
      font-size: 34px;
      color: ${(props) => props.theme.colors.baseText};
      b{
        font-weight: bold;
      }
    }
    .checkout-form {
      margin-right: 20px;
    }
  }
`;
