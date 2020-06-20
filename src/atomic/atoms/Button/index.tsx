import * as React from 'react';
import { styled } from 'config/theme';

interface IButtonProps {
  className?: string;
  text?: string;
  onClick?(): void;
}

const ButtonComponent: React.FunctionComponent<IButtonProps> = ({className, onClick, text}) => {
  return <button className={className} onClick={onClick}>
      {text}
  </button>
};

export const Button = styled(ButtonComponent)`
    padding: 10px 30px;
    cursor: pointer;
    border: none;
    background: none;
    outline: 0;
    margin: 5px 5px 10px 0;
    padding: 0 0 2px;
    color: ${props => props.theme.colors.baseText};
    font-size: 22px;
    border-bottom: 2px solid transparent;
    transition:  border-bottom 0.3s;

    &:hover{
      border-bottom: 2px solid ${props => props.theme.colors.baseText};
    }
`