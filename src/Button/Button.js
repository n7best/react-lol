import React from 'react';
import Styles from '../styles';
import styled, { ThemeProvider } from 'styled-components';
import Shared from '../shared';

const { themeDefault, themeGold } = Styles
const { GradientBorderBox } = Shared

const InnerButton = styled.span`
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  letter-spacing: 1.3px;
  background: ${props => props.theme.button_text_bg};
  box-shadow: ${props => props.theme.box_inner_shadow};
  transition: background-image .5s, color 1s ease-in-out;
`

class Button extends React.Component {
  render() {
    const { children, primary, ...others } = this.props

    return (
      <ThemeProvider theme={primary ? themeDefault : themeGold}>
        <GradientBorderBox>
          <InnerButton>{ children }</InnerButton>
        </GradientBorderBox>
      </ThemeProvider>
    );
  }
}

Button.defaultProps = {
  primary: false
}

export default Button;