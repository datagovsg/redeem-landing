import { Flex, Text, VStack } from '@chakra-ui/react'

import HeroAnimation from './HeroAnimation'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import RedeemSGRewards from '~images/RedeemSGRewards.svg'

const Hero = () => {
  return (
    <SectionContainer background="primary.100">
      <Flex
        flexDirection={{ base: 'column', ssmd: 'row', md: 'row' }}
        gap={{ base: '40px', sm: '4px', ssmd: '45px', md: '72px', lg: '120px' }}
        maxWidth="1440px"
        padding={{
          base: '32px 24px 0',
          ssmd: '52px 58px 0',
          md: '72px 88px 0',
          lg: '88px 128px 0',
          xl: '88px 148px 0',
        }}
        boxSizing="content-box"
      >
        <VStack
          align="start"
          justifyContent="center"
          spacing={{
            base: '16px',
            ssmd: '12px',
            md: '24px',
            lg: '24px',
            xl: '32px',
          }}
        >
          <Image
            src={RedeemSGRewards}
            alt="RedeemSG Rewards"
            height={{
              xl: '40px',
              ssmd: '18px',
              md: '26px',
              lg: '32px',
              base: '38px',
            }}
            width={{
              xl: '132px',
              ssmd: '64px',
              md: '88px',
              lg: '106px',
              base: '120px',
            }}
          />
          <VStack align="start" spacing="16px">
            <Text
              textStyle={{
                base: 'h3-semibold',
                ssmd: 'h5',
                md: 'h4',
                lg: 'h3-semibold',
                xl: 'h1',
              }}
              color="neutral.900"
            >
              The simplified digital voucher experience for all
            </Text>
            <Text
              textStyle={{
                base: 'body-1',
                ssmd: 'legal',
                md: 'body-2',
                lg: 'body-2',
                xl: 'body-1',
              }}
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
