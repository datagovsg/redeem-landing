import {
  Box,
  Button,
  Flex,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

import CenterChildWithFixHeightAndWidth from '~components/CenterChildWithFixHeightAndWidth'
import { Image } from '~components/Image'
import Infobox from '~components/Infobox'
import SectionContainer from '~components/SectionContainer'
import {
  REWARDS,
  REWARDS_ROOT,
  RSG_CDC_CAMPAIGN_ORGANISER_FORM,
  RSG_REWARDS_WHERE_TO_SPEND,
} from '~constants/links'
import { openInNewTab } from '~helper'
// Images
import SelectSuitableMerchantsCustomImage from '~images/SelectSuitableMerchantsCustom.svg'
import SelectSuitableMerchantsRSGRewardsImage from '~images/SelectSuitableMerchantsRSGRewards.svg'
import WTSColdStorageLogoImage from '~images/WTSColdStorageLogo.jpg'
import WTSFairpriceLogoImage from '~images/WTSFairpriceLogo.svg'
import WTSGiantLogoImage from '~images/WTSGiantLogo.jpg'
import WTSHAOMartLogoImage from '~images/WTSHAOMartLogo.svg'
import WTSPrimeLogoImage from '~images/WTSPrimeLogo.jpg'
import WTSShengSiongLogoImage from '~images/WTSShengSiongLogo.svg'
import WTSUStarsLogoImage from '~images/WTSUStarsLogo.jpg'

const MERCHANT_LOGO_LIST = [
  {
    backgroundColor: 'grey.100',
    imageSrc: WTSColdStorageLogoImage,
    label: 'Cold Storage',
  },
  {
    backgroundColor: 'blue.100',
    imageSrc: WTSFairpriceLogoImage,
    label: 'Fairprice',
  },
  {
    backgroundColor: 'red.100',
    imageSrc: WTSUStarsLogoImage,
    label: 'Ustars',
  },

  {
    backgroundColor: 'green.100',
    imageSrc: WTSGiantLogoImage,
    label: 'Giant',
  },
  {
    backgroundColor: 'yellow.50',
    imageSrc: WTSHAOMartLogoImage,
    label: 'HAO mart',
  },

  {
    backgroundColor: '#E2EEED',
    imageSrc: WTSPrimeLogoImage,
    label: 'Prime',
  },
  {
    backgroundColor: 'primary.50',
    imageSrc: WTSShengSiongLogoImage,
    label: 'Sheng Siong',
  },
] as const

const RedeemSGRewardsTab = () => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch(REWARDS)
    router.prefetch(REWARDS_ROOT)
  }, [router])

  return (
    <VStack
      align="start"
      marginTop={{ lg: '24px', 'md-lg': '16px', base: '24px' }}
      spacing={{ lg: '32px', 'md-lg': '24px', base: '32px' }}
    >
      <Text
        textStyle={{ base: 'body-1', 'md-lg': 'body-2', lg: 'body-1' }}
        color="neutral.700"
        whiteSpace="pre-line"
      >
        {
          'Suitable for campaigns that provide vouchers as rewards. With RedeemSG Rewards, cut down on operational efforts to onboard and train merchants.\n\nSpendable at'
        }
        <Link
          textStyle={{
            base: 'text-editor-link',
            'md-lg': 'text-editor-link-small',
            lg: 'text-editor-link',
          }}
          color="primary.500"
          textDecoration="underline"
          _hover={{
            color: 'primary.600',
          }}
          href={RSG_REWARDS_WHERE_TO_SPEND}
          isExternal
        >
          {/* https://css-tricks.com/text-that-sometimes-turns-to-emojis/ */}
          all participating chains ↪&#xFE0E;
        </Link>
      </Text>
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        gap={{ base: '24px', 'md-lg': '12px', lg: '24px' }}
        width="100%"
      >
        {MERCHANT_LOGO_LIST.map(({ backgroundColor, imageSrc, label }) => (
          <CenterChildWithFixHeightAndWidth
            width={{ base: '44px', 'md-lg': '40px', lg: '44px' }}
            height={{ base: '44px', 'md-lg': '40px', lg: '44px' }}
            borderRadius="50%"
            background={backgroundColor}
            key={label}
            padding="4px"
          >
            <Image src={imageSrc} alt={label} />
          </CenterChildWithFixHeightAndWidth>
        ))}
      </Flex>
      <Button
        colorScheme="primary"
        onClick={() => router.push(REWARDS_ROOT)}
        rightIcon={<BiRightArrowAlt />}
        variant="solid"
      >
        Find out more
      </Button>
    </VStack>
  )
}

const CustomisedMerchantTab = () => {
  return (
    <VStack
      align="start"
      marginTop={{ lg: '24px', 'md-lg': '16px', base: '24px' }}
      spacing="24px"
    >
      <Text
        textStyle={{ base: 'body-1', 'md-lg': 'body-2', lg: 'body-1' }}
        color="neutral.700"
        whiteSpace="pre-line"
      >
        {
          'Suitable for schemes that require a customised set of merchants.\n\nTailor your campaign to specific goals, by ensuring that vouchers can only be spent only at specific merchants.'
        }
      </Text>
      <Infobox
        text={
          <Text
            textStyle={{ base: 'body-2', lg: 'body-1' }}
            color="neutral.900"
          >
            Please note that you&apos;ll have to handle the onboarding and
            management of merchants to RedeemSG. To find out more, talk to us.
          </Text>
        }
        background="primary.200"
      />
      <Button
        colorScheme="primary"
        onClick={() => openInNewTab(RSG_CDC_CAMPAIGN_ORGANISER_FORM)}
        rightIcon={<BiRightArrowAlt />}
        variant="solid"
      >
        Talk to us
      </Button>
    </VStack>
  )
}

const MERCHANT_IMAGES = [
  SelectSuitableMerchantsRSGRewardsImage,
  SelectSuitableMerchantsCustomImage,
]

const SelectMerchants = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const merchantImage = MERCHANT_IMAGES[tabIndex]

  return (
    <SectionContainer>
      <Flex
        alignItems={{ base: 'left', 'md-lg': 'center' }}
        justifyContent="space-between"
        flexDirection={{ base: 'column-reverse', 'md-lg': 'row' }}
        flexGrow={1}
        gap={{ base: '40px', 'md-lg': '24px' }}
        width="100%"
        maxWidth="calc(1440px + 296px)"
        padding={{
          lg: '88px 148px',
          'md-lg': '80px 128px',
          sm: '64px 88px',
          base: '40px 24px',
        }}
      >
        <VStack
          align="start"
          width="100%"
          maxWidth={{ lg: '540px', 'md-lg': '300px' }}
          spacing={{ base: '32px', 'md-lg': '16px', lg: '24px' }}
        >
          <Text
            textStyle={{
              lg: 'h1',
              'md-lg': 'h3-semibold',
              sm: 'h2',
              base: 'h3-semibold',
            }}
            color="neutral.900"
          >
            Select a voucher type, based on your campaign goals
          </Text>

          <Tabs width="100%" onChange={(index) => setTabIndex(index)}>
            <Box overflow="auto">
              <TabList overflowX="scroll" width="max-content">
                <Tab>
                  <Text
                    display={{ base: 'block', 'md-lg': 'none', lg: 'block' }}
                  >
                    REDEEMSG REWARDS
                  </Text>
                  <Text
                    display={{ base: 'none', 'md-lg': 'block', lg: 'none' }}
                    whiteSpace="pre-line"
                  >
                    {'REDEEMSG\nREWARDS'}
                  </Text>
                </Tab>
                <Tab>
                  <Text
                    display={{ base: 'block', 'md-lg': 'none', lg: 'block' }}
                  >
                    CUSTOMISED CAMPAIGN
                  </Text>
                  <Text
                    display={{ base: 'none', 'md-lg': 'block', lg: 'none' }}
                    whiteSpace="pre-line"
                  >
                    {'CUSTOMISED\nCAMPAIGN'}
                  </Text>
                </Tab>
              </TabList>
            </Box>
            <TabPanels width="100%">
              <TabPanel>
                <RedeemSGRewardsTab />
              </TabPanel>
              <TabPanel>
                <CustomisedMerchantTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
        <Flex minWidth="156px">
          <Image
            quality={100}
            width={{ lg: '404px', sm: '288px', base: '280px' }}
            src={merchantImage}
            alt="select suitable merchants"
          />
        </Flex>
      </Flex>
    </SectionContainer>
  )
}

export default SelectMerchants
