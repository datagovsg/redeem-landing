import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import CenterChildWithFixHeightAndWidth from '~components/CenterChildWithFixHeightAndWidth'
import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import {
  CDC_RESIDENTS_FAQ,
  CFHP_FAQ,
  REWARDS,
  REWARDS_ROOT,
} from '~constants/links'
import { openInNewTab } from '~helper'
import VouchersCDCLogoImage from '~images/VouchersCDCLogo.svg'
import VouchersNEACFHPLogoImage from '~images/VouchersNEACFHPLogo.svg'
import VouchersRSGRewardsLogoImage from '~images/VouchersRSGRewardsLogo.svg'

const SearchingForSpecificVoucher = () => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch(REWARDS)
    router.prefetch(REWARDS_ROOT)
  }, [router])

  const VOUCHERS_INFORMATION = [
    {
      label: 'CDC Vouchers Scheme 2024',
      imageSrc: VouchersCDCLogoImage,
      buttonText: "View Residents' FAQ",
      backgroundColor: '#F7E5EC',
      onClick: () => openInNewTab(CDC_RESIDENTS_FAQ),
    },
    {
      label: 'NEA Climate Friendly Households',
      imageSrc: VouchersNEACFHPLogoImage,
      buttonText: "View Climate Vouchers' FAQ",
      backgroundColor: '#fff',
      onClick: () => openInNewTab(CFHP_FAQ),
    },
    {
      label: 'RedeemSG Rewards Schemes',
      imageSrc: VouchersRSGRewardsLogoImage,
      buttonText: 'Go to RedeemSG Rewards',
      backgroundColor: '#E9EBFF',
      onClick: () => router.push(REWARDS_ROOT),
    },
  ]

  return (
    <SectionContainer backgroundColor="primary.100" width="100%">
      <VStack
        width="100%"
        maxWidth="1440px"
        padding={{
          lg: '88px 148px',
          'md-lg': '80px 128px',
          sm: '64px 88px',
          base: '40px 24px',
        }}
        boxSizing="content-box"
        spacing={{ lg: '64px', base: '40px' }}
      >
        <Box maxWidth="716px" textAlign={{ lg: 'center', base: 'initial' }}>
          <Text
            textStyle={{ sm: 'h2', base: 'h3-semibold' }}
            color="neutral.900"
          >
            Searching for more information about a specific voucher?
          </Text>
        </Box>
        <Grid
          gridGap={{ '2xl': '128px', lg: '96px', base: '56px' }}
          gridTemplateColumns={{
            xl: '1fr 1fr 1fr',
            lg: '1fr 1fr',
            'md-lg': '1fr 1fr',
            base: '1fr',
          }}
          width="100%"
        >
          {VOUCHERS_INFORMATION.map(
            ({ imageSrc, label, buttonText, onClick, backgroundColor }) => (
              <GridItem key={label}>
                <VStack align="start" spacing="16px">
                  <Flex
                    alignItems={{
                      base: 'start',
                      sm: 'center',
                      'md-lg': 'start',
                    }}
                    flexDirection={{ 'md-lg': 'column', base: 'row' }}
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
                    height="fit-content"
                    textAlign="left"
                    onClick={onClick}
                    variant="outline"
                  >
                    {buttonText}
                  </Button>
                </VStack>
              </GridItem>
            ),
          )}
        </Grid>
      </VStack>
    </SectionContainer>
  )
}

export default SearchingForSpecificVoucher
