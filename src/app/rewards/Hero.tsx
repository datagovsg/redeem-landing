import { Flex, Text, VStack } from '@chakra-ui/react'

import HeroAnimation from './HeroAnimation'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import RedeemSGRewards from '~images/RedeemSGRewards.svg'

const Hero = () => {
  return (
    <SectionContainer background="primary.100">
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        gap={{ base: '40px', md: '120px' }}
        padding={{ base: '32px 24px 0', md: '88px 148px 0' }}
      >
        <VStack
          align="start"
          justifyContent="center"
          spacing={{ base: '16px', md: '32px' }}
        >
          <Image src={RedeemSGRewards} alt="RedeemSG Rewards" />
          <VStack align="start" spacing="16px">
            <Text
              textStyle={{ base: 'h3-semibold', md: 'h1' }}
              color="neutral.900"
            >
              The simplified digital voucher experience for all
            </Text>
            <Text textStyle="body-1" color="neutral.700">
              With RedeemSG Rewards, recipients can conveniently spend vouchers
              at all participating supermarkets, while agencies enjoy swift
              campaign set-up without the need to onboard merchants.
            </Text>
          </VStack>
        </VStack>
        <HeroAnimation />
      </Flex>
    </SectionContainer>
  )
}

export default Hero
