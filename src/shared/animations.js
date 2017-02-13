import React from 'react';
import { keyframes } from 'styled-components';

const shadowFadeInOut = (theme) => keyframes`
  0% {
    box-shadow: 1px 0px 19px 4px ${theme.shadow_top_start ? theme.shadow_top_start : 'rgba(0, 130, 196, 0.7)'}, inset 0px 0px 10px ${theme.shadow_top_end ? theme.shadow_top_end : 'rgba(255, 255, 255, 0.5)'};
  }

  100% {
    box-shadow: 0px 0px 0px 0px ${theme.shadow_bottom_start ? theme.shadow_bottom_start : 'rgba(0, 130, 196, 0.2)'}, inset 0px 0px 0px ${theme.shadow_bottom_end ? theme.shadow_bottom_end : 'rgba(255, 255, 255, 0.3)'}';
  }
`;

export default {
    shadowFadeInOut
}