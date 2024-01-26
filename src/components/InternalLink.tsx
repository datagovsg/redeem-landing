'use client'

import { chakra } from '@chakra-ui/react'
import NextLink from 'next/link'

export const InternalLink = chakra(NextLink, {
  shouldForwardProp: (prop) =>
    [
      'color',
      'children',
      'href',
      'key',
      'textStyles',
      'variants',
      'width',
      '_hover',
      'scroll',
    ].includes(prop),
})
