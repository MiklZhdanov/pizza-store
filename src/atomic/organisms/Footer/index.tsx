import * as React from 'react';
import { styled } from 'config/theme';
import { ContentWrapper } from 'atomic/templates/ContentWrapper';

interface IFooterProps {
  className?: string;
}

const FooterComponent: React.FunctionComponent<IFooterProps> = ({className}) => {
  return <div className={className}>
    <ContentWrapper>
      Footer
      </ContentWrapper>
  </div>
};

export const Footer = styled(FooterComponent)`
  margin-top: 50px;
  background: ${props => props.theme.colors.baseText};
  padding: 10px 0 20px;
  color: ${props => props.theme.colors.white};
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 200px;
`