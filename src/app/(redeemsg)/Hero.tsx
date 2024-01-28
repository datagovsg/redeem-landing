'use client'

import { Box, Button, Text, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BiRightArrowAlt } from 'react-icons/bi'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'

type HeroProps = {
  imgSrc: string
  imgAlt: string
}

const Hero = ({ imgSrc, imgAlt }: HeroProps) => {
  return (
    <SectionContainer backgroundColor="primary.100">
      <VStack
        width="100%"
        maxWidth="1440px"
        padding={{
          lg: '48px 148px 0',
          md: '48px 156px 0',
          base: '24px 24px 0',
        }}
        boxSizing="content-box"
        spacing={{ lg: '48px', md: '48px', sm: '32px', base: '24px' }}
      >
        <VStack spacing={0}>
          <Box maxWidth="680px" marginBottom="16px" textAlign="center">
            <Text
              textStyle={{
                lg: 'title-h1',
                md: 'title-h1',
                sm: 'title-h2',
                base: 'title-h2',
              }}
              color="neutral.900"
            >
              The trusted voucher system for Singapore
            </Text>
          </Box>
          <Text
            textStyle="body-2"
            marginBottom={{ lg: '16px', md: '16px', sm: '24px', base: '24px' }}
            color="neutral.700"
            textAlign="center"
          >
            The voucher system that works for everyone. RedeemSG helps
            Singapore&apos;s governmental agencies easily create, issue, and
            track digital vouchers.
          </Text>

          <NextLink
            href="https://signup.redeem.gov.sg/"
            passHref
            legacyBehavior
          >
            <Button
              as="a"
              colorScheme="primary"
              rightIcon={<BiRightArrowAlt />}
              variant="solid"
            >
              View available vouchers
            </Button>
          </NextLink>
        </VStack>
        <Box position="relative" width="100%">
          <Image src={imgSrc} alt={imgAlt} width="100%" priority={true} />
        </Box>
      </VStack>
    </SectionContainer>
  )
}

export default Hero
