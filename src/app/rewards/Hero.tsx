import { HStack, VStack, Text, Box } from '~components/chakra'
import React from 'react'
import { Image } from '~components/Image'
import RedeemSGRewards from '~images/RedeemSGRewards.svg'
import HeroAnimation from './HeroAnimation'

const Hero = () => {
  return (
    <HStack paddingTop="88px" spacing="120px">
      <VStack align="start" spacing="32px">
        <Image src={RedeemSGRewards} alt="RedeemSG Rewards" />
        <VStack align="start" spacing="16px">
          <Text textStyle="h1" color="neutral.900">
            The simplified digital voucher experience for all
          </Text>
          <Text textStyle="body-1" color="neutral.700">
            With RedeemSG Rewards, recipients can conveniently spend vouchers at
            all participating supermarkets, while agencies enjoy swift campaign
            set-up without the need to onboard merchants.
          </Text>
        </VStack>
      </VStack>
      <HeroAnimation />
    </HStack>
  )
}

export default Hero
