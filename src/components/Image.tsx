'use client'
import { chakra } from '@chakra-ui/react'
import NextImage from 'next/image'

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['alt', 'height', 'quality', 'src', 'width', 'layout'].includes(prop),
})
