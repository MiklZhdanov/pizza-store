import * as React from 'react';
import { styled } from 'config/theme';
import { media } from 'config/mixins';

interface IContentWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentWrapperComponent: React.FunctionComponent<IContentWrapperProps> = ({className,children}) => {
  return <div className={className}>
      {children}
  </div>
};

export const ContentWrapper = styled(ContentWrapperComponent)`
width: 100%;
padding: 0 5px;

${media.tablet`
    padding: 0 20px;
`}
${media.desktop`
    width: 1125px;
    margin: 0 auto;
    padding: 0 0px;
`}
`