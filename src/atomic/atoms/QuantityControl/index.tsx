import React, { useState, useEffect } from "react";
import { styled } from "config/theme";

interface IQuantityControlProps {
  className?: string;
  defaultQuantity?: number;
  onChange(data: { quantity: number }): void;
  step?: number;
  disabled?: boolean;
}

const QuantityControlComponent: React.FunctionComponent<IQuantityControlProps> = ({
  className,
  defaultQuantity = 0,
  step = 1,
  onChange
}) => {
  const [quantity, setQuantity] = useState(defaultQuantity);

  useEffect(() => {
    onChange({quantity})
  }, [quantity]);

  return (
    <div className={className}>
      <div
        className="quantity-control"
        onClick={() => {
          setQuantity(quantity - step);
        }}
      >
        -
      </div>
      <div className="quantity-value">{quantity}</div>
      <div
        className="quantity-control"
        onClick={() => {
          setQuantity(quantity + step);
        }}
      >
        +
      </div>
    </div>
  );
};

export const QuantityControl = styled(QuantityControlComponent)`
    width: 100px;
    height: 30px;
    display: flex;
    transition: opacity 0.5s;
    margin-bottom: 14px;
    ${props => props.disabled && `
        pointer-events: none;
        opacity: 0.5;
    `}

    .quantity{
        &-control{
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: bold;
            cursor: pointer;
            color: ${props => props.theme.colors.baseText};
            background: ${props => props.theme.colors.alto};
            transition: all 0.3s;
            &:hover{
                color: ${props => props.theme.colors.white};
                background: ${props => props.theme.colors.baseText};
            }
        }
        &-value{
            color: ${props => props.theme.colors.baseText};
            font-size: 16px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
        }
    }
`;
