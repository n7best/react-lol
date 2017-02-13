import colors from './colors'
import defaultTheme from './default.theme'
import Shared from '../shared'
const { Animations } = Shared;

const goldTheme = Object.assign({}, defaultTheme, {
    border_active_start: colors.gold1,
    border_active_end: colors.gold2,
    border_start: colors.gold3,
    border_end: colors.gold4,

    text_color_primary: colors.lightGold,
    button_text_bg: '#1E2328',
    text_active_color: '#F0E6D2',
    box_inner_shadow: '0 0 .75px .75px #010a13, inset 0 0 .75px .75px #010a13',
    bg_bottom_gradient: 'linear-gradient(to bottom, rgba(16,22,30,0) 0%,rgba(30,35,40,0) 50%,rgba(239,229,214,.25) 100%)',

    animationIteration: 1,
    animationTime: 1,
    shadowFadeInOut: Animations.shadowFadeInOut({
        shadow_top_start: 'rgba(239,229,214, 0.7)',
        shadow_top_end: 'rgba(200,156,61, 0.5)',
        shadow_bottom_start: 'rgba(239,229,214, 0.2)',
        shadow_bottom_end: 'rgba(200,156,61, 0.3)',
    })
})

export default goldTheme;