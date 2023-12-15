'use client'

import { Suspense } from 'react'
import { HStack, Text } from '~components/chakra'
import { RestrictedFooter } from '~components/design-system'

import { Image } from '~components/Image'
import RedeemLogoWithText from '~images/RedeemLogoWithText.svg'

export const AppName = () => {
  return (
    <HStack spacing="16px">
      <Image src={RedeemLogoWithText} alt="RedeemSG" height="24px" />
      <Text textStyle="body-2" color="primary.500" as="span">
        Trusted voucher system of the Singapore Government
      </Text>
    </HStack>
  )
}
