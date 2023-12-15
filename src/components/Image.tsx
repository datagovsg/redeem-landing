'use client'
import { chakra } from '@chakra-ui/react'
import NextImage from 'next/image'

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
})
