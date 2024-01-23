import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

const parts = anatomy('infobox').parts('messagebox', 'icon')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  messagebox: {
    display: 'flex',
    justifyContent: 'start',
    color: 'neutral.900',
  },
})

const variantInfo = definePartsStyle({
  messagebox: {
    bg: 'primary.100',
  },
  icon: {
    color: 'primary.500',
  },
})

const variantWarning = definePartsStyle({
  messagebox: {
    bg: 'warning.100',
  },
  icon: {
    color: 'warning.500',
  },
})

const variantError = definePartsStyle({
  messagebox: {
    bg: 'danger.100',
  },
  icon: {
    color: 'danger.500',
  },
})

const sizes = {
  sm: definePartsStyle({
    messagebox: {
      p: '0.625rem',
      textStyle: 'body-2',
    },
    icon: {
      my: '0.125rem',
      fontSize: '1rem',
      mr: '0.5rem',
    },
  }),
  md: definePartsStyle({
    messagebox: {
      padding: '1rem',
      textStyle: 'body-1',
    },
    icon: {
      fontSize: '1.5rem',
      mr: '0.5rem',
    },
  }),
}

const variants = {
  info: variantInfo,
  warning: variantWarning,
  error: variantError,
}

export const Infobox = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'info',
    size: 'md',
  },
})
