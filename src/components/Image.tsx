'use client'
import { chakra } from '~components/chakra'
import NextImage from 'next/image'

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
})
