import { extendTheme } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

import { colors } from './colours'
import { shadows } from './shadows'
import { spacing } from './spacing'
import { textStyles } from './textStyles'
import { typography } from './typography'
import { components } from './components'

// Chakra uses min width breakpoints
export const theme = extendTheme(ogpTheme, {
  fonts: {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
  },
  colors,
  shadows: shadows,
  space: spacing,
  fontSizes: typography.fontSize,
  fontWeights: typography.fontWeights,
  lineHeights: typography.lineHeights,
  letterSpacings: typography.letterSpacing,
  textStyles,
  components,
  // Note for breakpoint in general, pls use only base, sm, md, lg, xl, 2xl as the standard sizing
  // Though chakra is based on minWidth concept (i.e mobile first), there are some implementations in this codebase that is not so
  // accurate to that pattern when matching the figma
  breakpoints: {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
    // Special breakpoint. Do not use unless there is a need (this is used only in rewards/organiser)
    ssmd: '33.75em', // ~540px
    // Special breakpoint. Do not use unless there is a need
    smd: '43em', // ~688px
    // This is use as md for redeem rewards
    md: '48em', // ~768px
    // Special breakpoint. This is use as md for redeem landing
    'md-lg': '51.25em', // ~820px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
  },
})
