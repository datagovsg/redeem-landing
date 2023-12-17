'use client'

import { VStack } from '@chakra-ui/react'

import AppFooter from '~components/AppFooter'
import NavMenu from '~components/NavMenu'
import RedeemLogoWhite from '~images/RedeemLogoWhite.svg'
import RedeemLogoWhiteWithTextImage from '~images/RedeemLogoWhiteWithText.svg'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack as="main" align="stretch" flexGrow={1} spacing={0}>
      <NavMenu
        mobileLogo={RedeemLogoWhite}
        desktopLogo={RedeemLogoWhiteWithTextImage}
        backgroundColor="primary.600"
        textColor="white"
      />
      {children}
      <AppFooter />
    </VStack>
  )
}
