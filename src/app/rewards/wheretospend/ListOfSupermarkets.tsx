import { Button, Flex, Grid, GridItem, Text, VStack } from '@chakra-ui/react'

import CenterChildWithFixHeightAndWidth from '~components/CenterChildWithFixHeightAndWidth'
import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
// Links
import {
  WTS_COLD_STORAGE,
  WTS_FAIRPRICE,
  WTS_GIANT,
  WTS_HAO_MART,
  WTS_PRIME,
  WTS_SHENG_SIONG,
  WTS_USTARS,
} from '~constants/links'
import { openInNewTab } from '~helper'
// Images
import WTSColdStorageLogoImage from '~images/WTSColdStorageLogo.jpg'
import WTSFairpriceLogoImage from '~images/WTSFairpriceLogo.svg'
import WTSGiantLogoImage from '~images/WTSGiantLogo.jpg'
import WTSHAOMartLogoImage from '~images/WTSHAOMartLogo.svg'
import WTSPrimeLogoImage from '~images/WTSPrimeLogo.jpg'
import WTSShengSiongLogoImage from '~images/WTSShengSiongLogo.svg'
import WTSUStarsLogoImage from '~images/WTSUStarsLogo.jpg'

// ORDERING IS IMPORTANT HERE
const SUPERMARKETS = [
  {
    backgroundColor: 'blue.100',
    imageSrc: WTSFairpriceLogoImage,
    label: 'Fairprice',
    url: WTS_FAIRPRICE,
  },
  {
    backgroundColor: 'green.100',
    imageSrc: WTSGiantLogoImage,
    label: 'Giant',
    url: WTS_GIANT,
  },
  {
    backgroundColor: 'grey.100',
    imageSrc: WTSColdStorageLogoImage,
    label: 'Cold Storage',
    url: WTS_COLD_STORAGE,
  },
  {
    backgroundColor: '#E2EEED',
    imageSrc: WTSPrimeLogoImage,
    label: 'Prime',
    url: WTS_PRIME,
  },
  {
    backgroundColor: 'yellow.50',
    imageSrc: WTSHAOMartLogoImage,
    label: 'HAO mart',
    url: WTS_HAO_MART,
  },
  {
    backgroundColor: 'red.100',
    imageSrc: WTSUStarsLogoImage,
    label: 'Ustars',
    url: WTS_USTARS,
  },
  {
    backgroundColor: 'primary.50',
    imageSrc: WTSShengSiongLogoImage,
    label: 'Sheng Siong',
    url: WTS_SHENG_SIONG,
  },
] as const

const ListOfSupermarkets = () => {
  return (
    <SectionContainer
      padding={{ base: '40px 24px', md: '88px 128px', lg: '88px 148px' }}
    >
      <VStack align="start" spacing={{ base: '32px', md: '64px', lg: '80px' }}>
        <Text
          textStyle={{ base: 'h3-semibold', md: 'h2', lg: 'h1' }}
          color="neutral.900"
        >
          RedeemSG Rewards can be spent at any of these participating
          supermarkets:
        </Text>
        <Grid
          gridRowGap={{ base: '44px', md: '64px', lg: '88px' }}
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr' }}
          width="100%"
        >
          {SUPERMARKETS.map(({ label, imageSrc, backgroundColor, url }) => (
            <GridItem key={label}>
              <VStack align="start" spacing="16px">
                <Flex
                  alignItems={{ base: 'center', md: 'start', lg: 'start' }}
                  flexDirection={{ base: 'row', md: 'column', lg: 'column' }}
                  gap="20px"
                >
                  <CenterChildWithFixHeightAndWidth
                    width="60px"
                    height="60px"
                    borderRadius="50%"
                    background={backgroundColor}
                    padding="4px"
                  >
                    <Image src={imageSrc} alt={label} width="100%" />
                  </CenterChildWithFixHeightAndWidth>
                  <Text textStyle="h4" color="neutral.900">
                    {label}
                  </Text>
                </Flex>
                <Button
                  onClick={() => openInNewTab(url)}
                  variant="outline"
                >{`Find a ${label} near you`}</Button>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </SectionContainer>
  )
}

export default ListOfSupermarkets
