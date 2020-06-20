import React, { FC } from 'react';
import { styled } from 'config/theme';
import { media } from 'config/mixins';
import theme from 'config/theme';

const Label = styled.label`
  display: inline-block;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  padding-bottom: 8px;
  ${media.desktop`
    font-size: 16px;
    line-height: 20px;
  `}
`;

const Help = styled.div<any>`
  margin-top: 5px;
  font-size: 13px;
  line-height: 16px;
  color: ${theme.colors.hurricane};
  button {
    cursor: pointer;
    text-decoration: underline;
    background: none;
    border: none;
    padding: 0;
    font-size: 13px;
    line-height: 16px;
    color: ${theme.colors.hurricane};
    &:hover {
      text-decoration: none;
    }
  }
`;

const Error = styled(Help)`
  color: ${theme.colors.primary};
`;


type Props = {
  label?: string;
  help?: string | React.ReactNode;
  error?: string | boolean;
  className?: string;
};

const FormGroupComponent: FC<Props> = ({ children, label, help, error, className }) => {
  return (
    <div className={className}>
      {label && <Label className="label">{label}</Label>}
      <div>{children}</div>
      {error && <Error className="error">{error}</Error>}
      {help && <Help className="help">{help}</Help>}
    </div>
  );
};

export const FormGroup = styled(FormGroupComponent)`
  margin-bottom: 16px;
  ${props =>
    props.error &&
    `
    input, textarea, .select {
      border: 1px solid #FC3B38;
    }
  `}
`;
