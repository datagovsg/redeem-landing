import { Flex, Text, VStack } from '@chakra-ui/react'

import HeroAnimation from './HeroAnimation'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import RedeemSGRewards from '~images/RedeemSGRewards.svg'

const Hero = () => {
  return (
    <SectionContainer background="primary.100">
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row', lg: 'row' }}
        gap={{ base: '40px', md: '72px', lg: '120px' }}
        maxWidth="1440px"
        padding={{
          base: '32px 24px 0',
          md: '88px 128px 0',
          lg: '88px 148px 0',
        }}
        boxSizing="content-box"
      >
        <VStack
          align="start"
          justifyContent="center"
          spacing={{ base: '16px', md: '24px', lg: '32px' }}
        >
          <Image
            src={RedeemSGRewards}
            alt="RedeemSG Rewards"
            height={{ lg: '40px', md: '32px', base: '38px' }}
            width={{ lg: '132px', md: '106px', base: '120px' }}
          />
          <VStack align="start" spacing="16px">
            <Text
              textStyle={{ base: 'h3-semibold', md: 'h3-semibold', lg: 'h1' }}
              color="neutral.900"
            >
              The simplified digital voucher experience for all
            </Text>
            <Text
              textStyle={{ base: 'body-1', md: 'body-2', lg: 'body-1' }}
              color="neutral.700"
            >
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
