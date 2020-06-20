import * as React from 'react';
import { styled } from 'config/theme';
import { Header } from 'atomic/organisms/Header';
import { Footer } from 'atomic/organisms/Footer';
import { ContentWrapper } from 'atomic/templates/ContentWrapper';


interface IBaseLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const BaseLayoutComponent: React.FunctionComponent<IBaseLayoutProps> = ({className, children}) => {
  return <div className={className}>
    <Header/>
    <ContentWrapper>
      <div className="base-layout-body">
        {children}
      </div>
    </ContentWrapper>
    <Footer/>
  </div>
};

export const BaseLayout = styled(BaseLayoutComponent)`
min-height: 100vh;
background-color: ${props => props.theme.colors.white};
.base-layout{
  &-body{
    padding: 30px 0px;
  }
}
`