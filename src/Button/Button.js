import React from 'react';
import colors from '../styles/colors';
import styled, { keyframes } from 'styled-components';

const rotateBlue = keyframes`
  0%, 100% {
    box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5);
  }

  50% {
    box-shadow: 0px 0px 19px 4px rgba(0, 130, 196, 0.2), inset 0px 0px 10px rgba(255, 255, 255, 0.3);
  }
`;

const StyledBorderBox = styled.div`
  width: ${props => props.width ? props.width : '200px' };
  height: ${props => props.height ? props.height : '30px' };
  line-height: ${props => props.height ? props.height : '30px' };
  font-size: 15px;
  background-image: linear-gradient(to bottom, ${colors.border_blue_active_start} 0%, ${colors.border_blue_active_end} 100%);
  text-align: center;
  vertical-align: middle;
  padding: 3px;
  color: ${colors.text_lightBlue};
  cursor: pointer;
  display: block;
  position: relative;
  z-index: 1;

  &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content:'';
  }

  &:active {
    opacity: .5;
  }

  &:after {
    background-image: linear-gradient(to bottom, ${colors.border_blue_start} 0%, ${colors.border_blue_end} 100%);
    z-index: -2;
    transition: opacity .1s;
  }

  &:hover {
    animation: ${rotateBlue} 2s infinite;
  }

  &:hover:after {
    opacity: 0;
  }

  &:hover span {
    background-image: linear-gradient(to bottom, rgba(16,22,30,0) 0%,rgba(92,136,140,0) 50%,rgba(167,250,249,.25) 100%);
  }
`;

const InnerButton = styled.span`
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  letter-spacing: 1.3px;
  background: ${colors.bg_darkBlue};
  box-shadow: 0 0 .75px .75px #010a13, inset 0 2px .75px .75px #010a13;
  transition: background-image .5s;
`

class Button extends React.Component {
  render() {
    const { children, ...others } = this.props

    return (
      <StyledBorderBox {...others}>
        <InnerButton>{ children }</InnerButton>
      </StyledBorderBox>
    );
  }
}

export default Button;