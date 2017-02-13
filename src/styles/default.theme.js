import colors from './colors'
import Shared from '../shared'
const { Animations } = Shared;

const theme = {

  border_active_start: colors.blue1,
  border_active_end: colors.blue2,
  border_start: colors.blue3,
  border_end: colors.blue4,


  //button
  bg_bottom_gradient: 'linear-gradient(to bottom, rgba(16,22,30,0) 0%,rgba(92,136,140,0) 50%,rgba(167,250,249,.25) 100%)',
  box_inner_shadow: '0 0 .75px .75px #010a13, inset 0 2px .75px .75px #010a13',
  text_color_primary: colors.lightBlue,
  button_text_bg: colors.darkBlue,
  text_active_color: colors.lightBlue,

  //animations
  animationIteration: 'infinite',
  animationTime: '.75',
  shadowFadeInOut: Animations.shadowFadeInOut({
      shadow_top_start: 'rgba(0, 130, 196, 0.7)',
      shadow_top_end: 'rgba(255, 255, 255, 0.5)',
      shadow_bottom_start: 'rgba(0, 130, 196, 0.2)',
      shadow_bottom_end: 'rgba(255, 255, 255, 0.3)',
  })
};

export default theme;