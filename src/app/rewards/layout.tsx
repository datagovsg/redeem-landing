'use client'

import AppFooter from '~components/AppFooter'
import NavMenu from '~components/NavMenu'
import { VStack } from '@chakra-ui/react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack as="main" align="stretch" flexGrow={1} spacing={0}>
      <NavMenu />
      {children}
      <AppFooter />
    </VStack>
  )
}
