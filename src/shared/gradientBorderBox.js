import React from 'react';
import styled from 'styled-components';

const GradientBorderBox = styled.div`
  width: ${props => props.width ? props.width : '200px' };
  height: ${props => props.height ? props.height : '30px' };
  line-height: ${props => props.height ? props.height : '30px' };
  font-size: 14px;
  background-image: linear-gradient(to bottom, ${props => props.theme.border_active_start} 0%, ${props => props.theme.border_active_end} 100%);
  text-align: center;
  vertical-align: middle;
  padding: 3px;
  color: ${props => props.theme.text_color_primary};
  cursor: pointer;
  display: inline-block;
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
    background-image: linear-gradient(to bottom, ${props => props.theme.border_start} 0%, ${props => props.theme.border_end} 100%);
    z-index: -2;
    transition: opacity .5s linear;
  }

  &:hover {
    animation: ${props => props.shadow === false ? 'none' : `${props.theme.shadowFadeInOut} ${props.theme.animationTime ? props.theme.animationTime : 1 }s ${props.theme.animationIteration ? props.theme.animationIteration : 1} alternate ease-in-out`};
  }

  &:hover:after {
    opacity: 0;
  }

  &:hover span {
    background-image: ${props => props.theme.bg_bottom_gradient};
    color: ${props => props.theme.text_active_color};
  }
`;

export default GradientBorderBox;