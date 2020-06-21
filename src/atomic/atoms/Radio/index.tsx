import * as React from 'react';
import {styled} from 'config/theme';

interface IRadioProps {
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  className?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioComponent: React.FunctionComponent<IRadioProps> = ({
  children,
  name = '',
  checked = false,
  defaultChecked = undefined,
  className,
  value,
  onChange = () => {}
}) => (
  <label className={className}>
    <input
      type="radio"
      name={name}
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={onChange}
      value={value}
    />
    <div className="radio__point" />
    {children !== undefined ? <span>{children}</span> : null}
  </label>
);

export const Radio = styled(RadioComponent)`
position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  max-width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  input {
    display: none;
    &:checked ~ .radio__point {
      display: flex;
      align-items: center;
      justify-content: center;
      &:before {
        content: '';
        display: block;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.baseText};
        width: 7px;
        height: 7px;
      }
    }
  }
  .radio__point {
    flex-grow: 0;
    flex-shrink: 0;
    height: 15px;
    width: 15px;
    background-color: ${props => props.theme.colors.alto};
    margin-right: 10px;
    border-radius: 50%;
    margin-bottom: 2px;
  }
  span {
    font-size: 14px;
  }
`;
