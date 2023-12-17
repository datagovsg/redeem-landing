import { VStack, Text, Flex } from '@chakra-ui/react'
import { Image } from '~components/Image'
import RedeemSGRewards from '~images/RedeemSGRewards.svg'
import HeroAnimation from './HeroAnimation'
import SectionContainer from '~components/SectionContainer'

const Hero = () => {
  return (
    <SectionContainer background="primary.100">
      <Flex
        flexDirection={{ md: 'row', base: 'column-reverse' }}
        gap={{ md: '120px', base: '40px' }}
        padding={{ md: '88px 148px 0', base: '32px 24px 0' }}
      >
        <VStack
          align="start"
          justifyContent="center"
          spacing={{ md: '32px', base: '16px' }}
        >
          <Image src={RedeemSGRewards} alt="RedeemSG Rewards" />
          <VStack align="start" spacing="16px">
            <Text
              textStyle={{ md: 'h1', base: 'h3-semibold' }}
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
