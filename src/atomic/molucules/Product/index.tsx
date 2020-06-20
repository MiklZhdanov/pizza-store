import * as React from 'react';
import { styled } from 'config/theme';
import { ProductType } from 'modules/products/types';
import { Button } from 'atomic/atoms/Button';
import { getPriceWithCurrency } from 'modules/currency/utils';
import { QuantityControl } from 'atomic/atoms/QuantityControl';

interface IProductProps {
  className?: string;
  product: ProductType;
  quantity?: number;
  addToCart({id, quantity}: {id: number, quantity: number}): void;
}

const ProductComponent: React.FunctionComponent<IProductProps> = ({className, product, addToCart, quantity}) => {
  return <div className={className}>
        <div className="product-image">
        </div>
        <div className="product-name">
            {product.name}
        </div>
        <div className="product-price">
            {getPriceWithCurrency({price: product.price})}
        </div>
        {quantity ? <QuantityControl
            defaultQuantity={quantity}
            onChange={(data)=>{
                addToCart({id: product.id, quantity: data.quantity - quantity})
            }}
        /> : <Button text='Add to cart' onClick={()=>{addToCart({id: product.id, quantity: 1})}}/>}
  </div>
};

export const Product = styled(ProductComponent)`
    width: 280px;
    padding: 20px;
    margin: 0;
    transition: box-shadow 0.25s ease 0s;
    box-shadow: 0px 0px 0px ${props => props.theme.colors.white};
    cursor: pointer;

    &:hover{
        box-shadow: 2px 3px 16px ${props => props.theme.colors.alto};
    }

    .product{
        &-image{
            margin: 0 auto;
            width: 240px;
            height: 170px;
            background: url(${props =>props.product.image}) no-repeat;
            background-size: cover;
        }
        &-name{
            margin-top: 10px;
            font-size:14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        &-price{
            font-weight: 600;
            font-size: 15px;
            line-height: 18px;
            margin: 10px 0;
        }
    }
`