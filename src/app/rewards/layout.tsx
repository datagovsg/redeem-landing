'use client'

import { VStack } from '@chakra-ui/react'

import AppFooter from '~components/AppFooter'
import NavMenu from '~components/NavMenu'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack as="main" align="stretch" flexGrow={1} spacing={0}>
      <NavMenu />
      {children}
      <AppFooter />
    </VStack>
  )
}
