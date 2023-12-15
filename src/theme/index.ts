import { extendTheme } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

import { colors } from './colours'
// import { components } from './components'
import { shadows } from './shadows'
import { spacing } from './spacing'
import { textStyles } from './textStyles'
import { typography } from './typography'
import { inter } from '~constants/fonts'

export const theme = extendTheme(ogpTheme, {
  fonts: {
    body: inter.style.fontFamily,
    heading: inter.style.fontFamily,
  },
  colors,
  shadows: shadows,
  space: spacing,
  fontSizes: typography.fontSize,
  fontWeights: typography.fontWeights,
  lineHeights: typography.lineHeights,
  letterSpacings: typography.letterSpacing,
  textStyles,
  // components,
  breakpoints: {
    xs: '320px',
    sm: '360px',
    md: '400px',
    lg: '760px',
    xl: '960px',
    '2xl': '1536px',
  },
})
