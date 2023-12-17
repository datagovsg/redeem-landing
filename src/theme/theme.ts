import { extendTheme } from '@chakra-ui/react'
import { theme as ogpTheme } from '@opengovsg/design-system-react'

import { colors } from './colours'
import { shadows } from './shadows'
import { spacing } from './spacing'
import { textStyles } from './textStyles'
import { typography } from './typography'
import { components } from './components'

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
})
