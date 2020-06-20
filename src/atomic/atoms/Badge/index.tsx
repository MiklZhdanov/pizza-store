import * as React from 'react';
import { styled } from 'config/theme';

interface IBadgeProps {
  className?: string;
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
  text?: string | number;
}

const BadgeComponent: React.FunctionComponent<IBadgeProps> = ({className, children, text}) => {
  return <div className={className}>
      {children}
    {text ? <div className="badge">{text}</div> : null}
  </div>
};

export const Badge = styled(BadgeComponent)`
    position: relative;
    padding-right: 5px;
    .badge{
        position: absolute;
        top: -10px;
        right: -15px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: ${props => props.color || props.theme.colors.white} ;
        background: ${props => props.bgColor || props.theme.colors.green} ;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
    }
`