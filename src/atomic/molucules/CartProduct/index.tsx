import * as React from 'react';
import { styled } from 'config/theme';
import { ProductType } from 'modules/products/types';
import { getPriceWithCurrency } from 'modules/currency/utils';
import { QuantityControl } from 'atomic/atoms/QuantityControl';

interface ICartProductProps {
  className?: string;
  product: ProductType;
  quantity: number;
  addToCart({id, quantity}: {id: number, quantity: number}): void;
}

const CartProductComponent: React.FunctionComponent<ICartProductProps> = ({className, product, addToCart, quantity}) => {
    if(!quantity) return null
  return <div className={className}>
        <div className="cart-product-image">
        </div>
        <div className="cart-product-name">
            {product.name}
        </div>
        <div className="cart-product-price">
            {getPriceWithCurrency({price: product.price * quantity})}
        </div>
        <div className="cart-product-control"> 
            <QuantityControl
                defaultQuantity={quantity}
                onChange={(data)=>{
                    addToCart({id: product.id, quantity: data.quantity - quantity})
                }}
            />
        </div>
  </div>
};

export const CartProduct = styled(CartProductComponent)`
    padding: 5px 10px;
    margin: 0 0 10px;
    transition: background-color 0.25s ease 0s;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover{
        box-shadow: 2px 3px 16px ${props => props.theme.colors.alto};
    }

    .cart-product{
        &-image{
            margin: 0 auto;
            width: 50px;
            height: 50px;
            background: url(${props =>props.product.image}) no-repeat;
            background-size: cover;
            flex: 0 0 50px;
        }
        &-name{
            margin-left: 10px;
            flex-grow: 1;
            font-size:14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        &-price{
            flex: 0 0 100px;
            width: 100px;
            font-weight: 600;
            font-size: 15px;
            line-height: 18px;
            margin: 10px 0;
        }
        &-control{
            flex: 0 0 100px;
            width: 100px;
            margin-bottom: -14px;
        }
    }
`