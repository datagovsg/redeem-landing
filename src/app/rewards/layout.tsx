'use client'

import { VStack } from '@chakra-ui/react'

import AppFooter from '~components/AppFooter'
import NavMenu from '~components/NavMenu'
import RedeemLogoImage from '~images/RedeemLogo.svg'
import RedeemLogoWithTextImage from '~images/RedeemLogoWithText.svg'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack as="main" align="stretch" flexGrow={1} spacing={0}>
      <NavMenu
        mobileLogo={RedeemLogoImage}
        desktopLogo={RedeemLogoWithTextImage}
        backgroundColor="primary.200"
        textColor="primary.700"
      />
      {children}
      <AppFooter />
    </VStack>
  )
}
