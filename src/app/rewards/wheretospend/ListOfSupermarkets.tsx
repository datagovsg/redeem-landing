import { VStack, Text, Grid, GridItem, Button, Flex } from '@chakra-ui/react'
import SectionContainer from '~components/SectionContainer'
import { Image } from '~components/Image'

// Images
import WTSFairpriceLogoImage from '~images/WTSFairpriceLogo.svg'
import WTSGiantLogoImage from '~images/WTSGiantLogo.svg'
import WTSColdStorageLogoImage from '~images/WTSColdStorageLogo.svg'
import WTSPrimeLogoImage from '~images/WTSPrimeLogo.svg'
import WTSHAOMartLogoImage from '~images/WTSHAOMartLogo.svg'
import WTSUStarsLogoImage from '~images/WTSUStarsLogo.svg'
import WTSShengSiongLogoImage from '~images/WTSShengSiongLogo.svg'

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
import CenterChildWithFixHeightAndWidth from '~components/CenterChildWithFixHeightAndWidth'
import { openInNewTab } from '~helper'

// ORDERING IS IMPORTANT HERE
const SUPERMARKETS = [
  {
    label: 'Fairprice',
    imageSrc: WTSFairpriceLogoImage,
    url: WTS_FAIRPRICE,
    backgroundColor: 'blue.100',
  },
  {
    label: 'Giant',
    imageSrc: WTSGiantLogoImage,
    url: WTS_GIANT,
    backgroundColor: 'green.100',
  },
  {
    label: 'Cold Storage',
    imageSrc: WTSColdStorageLogoImage,
    url: WTS_COLD_STORAGE,
    backgroundColor: 'grey.100',
  },
  {
    label: 'Prime',
    imageSrc: WTSPrimeLogoImage,
    url: WTS_PRIME,
    backgroundColor: '#31874F',
  },
  {
    label: 'HAO mart',
    imageSrc: WTSHAOMartLogoImage,
    url: WTS_HAO_MART,
    backgroundColor: 'yellow.50',
  },
  {
    label: 'Ustars',
    imageSrc: WTSUStarsLogoImage,
    url: WTS_USTARS,
    backgroundColor: 'red.100',
  },
  {
    label: 'Sheng Siong',
    imageSrc: WTSShengSiongLogoImage,
    url: WTS_SHENG_SIONG,
    backgroundColor: 'primary.50',
  },
] as const

const ListOfSupermarkets = () => {
  return (
    <SectionContainer padding={{ md: '88px 148px', base: '40px 24px' }}>
      <VStack align="start" spacing={{ md: '80px', base: '32px' }}>
        <Text textStyle={{ md: 'h1', base: 'h3-semibold' }} color="neutral.900">
          RedeemSG Rewards can be spent at any of these participating
          supermarkets:
        </Text>
        <Grid
          gridRowGap={{ md: '88px', base: '44px' }}
          gridTemplateColumns={{ md: '1fr 1fr', base: '1fr' }}
          width="100%"
        >
          {SUPERMARKETS.map(({ label, imageSrc, backgroundColor, url }) => (
            <GridItem key={label}>
              <VStack align="start" spacing="16px">
                <Flex
                  alignItems={{ base: 'center', md: 'start' }}
                  flexDirection={{ md: 'column', base: 'row' }}
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
