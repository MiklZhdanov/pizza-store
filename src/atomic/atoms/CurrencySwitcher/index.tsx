import * as React from 'react';
import { styled } from 'config/theme';

interface CurrencySwitcherIProps {
  className?: string;
  currentCurrency?:  "eur" | "usd";
  onChange(currency: "eur" | "usd"): void;
}

const CurrencySwitcherComponent: React.FunctionComponent<CurrencySwitcherIProps> = ({className, onChange}) => {
  return <div className={className}>
      <div className="usd" onClick={()=>{onChange("usd")}}>$</div>
      <div className="eur" onClick={()=>{onChange("eur")}}>€</div>
  </div>
};

export const CurrencySwitcher = styled(CurrencySwitcherComponent)`
    display: flex;
    div{
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.white};
        opacity: 0.7;
        cursor: pointer;
    }
    ${props => `.${props.currentCurrency}{
        font-weight: bold;
        opacity: 1;
    }`}
`