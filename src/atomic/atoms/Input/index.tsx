import React from 'react';
import { styled } from 'config/theme';


const InputStyled = styled.input`
  display: block;
  width: 100%;
  background: #efefef;
  border: none;
  outline: none;
  padding: 15px 18px;
  font-size: 16px;
  border: 1px solid transparent;
  &::placeholder {
    color: #898282;
  }
`;

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  componentRef?: any;
}

const InputComponent = ({
  onSubmit,
  onFocus,
  onBlur,
  value,
  placeholder,
  type,
  name,
  disabled,
  required,
  onChange,
  className,
  autoComplete,
  componentRef
}: InputProps) => {
  const commonProps = {
    value,
    onSubmit,
    onFocus,
    onBlur,
    placeholder,
    type,
    name,
    disabled,
    required,
    onChange,
    className,
    autoComplete
  };
  return (
    <div className={className}>
      <InputStyled ref={componentRef} {...commonProps} />
    </div>
  );
};

export const Input = styled(InputComponent)`
position: relative;
input {
  padding-right: 20px;
}
.input__postfix {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  line-height: 1em;
}
.input__prefixElement {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  line-height: 1em;
}
`;