import React from 'react';
import { styled } from 'config/theme';

export const inputStyles = `
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
`

export const InputStyled = styled.input`
  ${inputStyles}
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
`;