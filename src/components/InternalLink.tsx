'use client'

import { chakra } from '@chakra-ui/react'
import NextLink from 'next/link'

export const InternalLink = chakra(NextLink, {
  shouldForwardProp: (prop) =>
    [
      'textStyles',
      'href',
      'color',
      'children',
      'key',
      'width',
      'variants',
      '_hover',
    ].includes(prop),
})
