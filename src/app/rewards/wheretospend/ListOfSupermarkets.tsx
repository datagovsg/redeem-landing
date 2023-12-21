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
import WTSColdStorageLogoImage from '~images/WTSColdStorageLogo.svg'
// Images
import WTSFairpriceLogoImage from '~images/WTSFairpriceLogo.svg'
import WTSGiantLogoImage from '~images/WTSGiantLogo.svg'
import WTSHAOMartLogoImage from '~images/WTSHAOMartLogo.svg'
import WTSPrimeLogoImage from '~images/WTSPrimeLogo.svg'
import WTSShengSiongLogoImage from '~images/WTSShengSiongLogo.svg'
import WTSUStarsLogoImage from '~images/WTSUStarsLogo.svg'

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
    backgroundColor: '#31874F',
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
    <SectionContainer padding={{ base: '40px 24px', lg: '88px 148px' }}>
      <VStack align="start" spacing={{ base: '32px', lg: '80px' }}>
        <Text textStyle={{ base: 'h3-semibold', lg: 'h1' }} color="neutral.900">
          RedeemSG Rewards can be spent at any of these participating
          supermarkets:
        </Text>
        <Grid
          gridRowGap={{ base: '44px', lg: '88px' }}
          gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          width="100%"
        >
          {SUPERMARKETS.map(({ label, imageSrc, backgroundColor, url }) => (
            <GridItem key={label}>
              <VStack align="start" spacing="16px">
                <Flex
                  alignItems={{ base: 'center', lg: 'start' }}
                  flexDirection={{ base: 'row', lg: 'column' }}
                  gap="20px"
                >
                  <CenterChildWithFixHeightAndWidth
                    width="60px"
                    height="60px"
                    borderRadius="50%"
                    background={backgroundColor}
                  >
                    <Image src={imageSrc} alt={label} />
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
