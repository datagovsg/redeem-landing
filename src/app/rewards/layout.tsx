'use client'

import AppFooter from '~components/AppFooter'
import NavMenu from '~components/NavMenu'
import { VStack } from '@chakra-ui/react'
import Hero from './Hero'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack as="main" align="stretch" flexGrow={1} spacing={0}>
      <NavMenu />
      <VStack spacing={0}>
        <Hero />
        {children}
      </VStack>
      <AppFooter />
    </VStack>
  )
}
