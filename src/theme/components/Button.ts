import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { getColor, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { textStyles } from '../textStyles'
import { getContrastColor } from '../utils/contrast'
import { hexToRgba } from '../utils/hextoRgba'

// Note there is still danger, sucesss, reverse, outline, clear but will not implement until necessary
export type ThemeButtonColorScheme = 'primary'

const genVariantSolidColours = ({
  colorScheme: c,
  theme,
}: StyleFunctionProps) => {
  let color = 'base.content.inverse'
  let solidVariantProps

  switch (c) {
    case 'primary': {
      solidVariantProps = {
        bg: `${c}.500`,
        activeBg: `${c}.700`,
        hoverBg: `${c}.600`,
        color: 'white',
      }
      break
    }

    default: {
      solidVariantProps = {
        bg: `${c}.500`,
        activeBg: `${c}.700`,
        hoverBg: `${c}.600`,
        color: 'white',
      }
    }
  }
  // Note that using the fallback content colour for the button text could still result in bad contrast.
  color = getContrastColor(
    getColor(theme, color),
    getColor(theme, solidVariantProps.bg),
    'base.content.default',
  )

  return { ...solidVariantProps, color }
}

const genVariantOutlineColours = ({
  colorScheme: c,
  theme,
}: StyleFunctionProps) => {
  switch (c) {
    case 'primary': {
      return {
        borderColor: `${c}.500` as const,
        activeBg: `${c}.200`,
        hoverBg: `${c}.100`,
      }
    }

    case 'outline-white': {
      return {
        borderColor: 'white',
        activeBg: `#FFFFFF33`,
        hoverBg: `#FFFFFF1A`,
      }
    }

    default: {
      return {
        borderColor: `${c}.500` as const,
        activeBg: hexToRgba(getColor(theme, `${c}.500`), 0.12),
        hoverBg: hexToRgba(getColor(theme, `${c}.500`), 0.04),
      }
    }
  }
}

const variantSolid = defineStyle((props) => {
  const { bg, hoverBg, activeBg, color } = genVariantSolidColours(props)

  return {
    bg,
    borderColor: bg,
    color,
    px: '15px',
    _active: {
      bg: activeBg,
      borderColor: activeBg,
    },
    _hover: {
      bg: hoverBg,
      borderColor: hoverBg,
      _disabled: {
        bg: 'primary.200',
        borderColor: 'primary.200',
      },
    },
  }
})

const variantOutlineClear = defineStyle((props) => {
  const { borderColor, activeBg, hoverBg } = genVariantOutlineColours(props)
  const showBorder = props.variant === 'outline'

  return {
    bg: 'transparent',
    px: '15px',
    borderColor: showBorder ? borderColor : 'transparent',
    color: borderColor,
    _disabled: {
      borderColor: showBorder
        ? 'interaction.support.disabled-content'
        : 'transparent',
      bg: 'transparent',
    },
    _active: {
      bg: activeBg,
      borderColor: showBorder ? borderColor : 'transparent',
    },
    _hover: {
      bg: hoverBg,
      borderColor: showBorder ? borderColor : 'transparent',
      _disabled: {
        borderColor: showBorder
          ? 'interaction.support.disabled-content'
          : 'transparent',
        bg: 'transparent',
      },
    },
  }
})

const variants = {
  solid: variantSolid,
  outline: variantOutlineClear,
}

const baseStyle = defineStyle({
  ...textStyles['subhead-1'],
  whiteSpace: 'pre-wrap',
  borderRadius: 'base',
  border: '1px solid',
  flexShrink: 0,
  // -1px for border
  px: '15px',
  py: '9px',
  _disabled: {
    bg: 'interaction.support.disabled',
    borderColor: 'interaction.support.disabled',
    opacity: 1,
    color: 'interaction.support.disabled-content',
  },
  _focusVisible: {
    boxShadow: 'none !important',
    outline: `2px solid var(--chakra-colors-utility-focus-default)`,
    outlineOffset: '0.125rem',
    _dark: {
      outline: `2px solid var(--chakra-colors-utility-focus-inverse)`,
    },
  },
})

const sizes = {
  xs: defineStyle({
    ...textStyles['subhead-2'],
    minH: '2.25rem',
    minW: '2.25rem',
  }),
  sm: defineStyle({
    ...textStyles['subhead-1'],
    minH: '2.5rem',
    minW: '2.5rem',
  }),
  md: defineStyle({
    ...textStyles['subhead-1'],
    minH: '2.75rem',
    minW: '2.75rem',
  }),
  lg: defineStyle({
    ...textStyles['subhead-1'],
    minH: '3rem',
    minW: '3rem',
  }),
}

export const Button = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'solid',
    colorScheme: 'primary',
    // @ts-expect-error Invalid exported type.
    focusBorderColor: 'primary.200',
    errorBorderColor: 'danger.500',
    size: 'md',
  },
})
