'use client'

import { Divider, VStack } from '@chakra-ui/react'

import AboutRedeemSG from './AboutRedeemSG'
import AboutRedeemSGRewards from './AboutRedeemSGRewards'
import FAQHeader from './FAQHeader'
import OnGoingCampaignFAQ from './OnGoingCampaignFAQ'

const Page = () => {
  return (
    <>
      <FAQHeader />
      <VStack
        flexGrow={1}
        padding={{ base: '48px 24px', lg: '64px 264px' }}
        spacing={{ base: '48px', lg: '72px' }}
      >
        <OnGoingCampaignFAQ />
        <Divider
          width="100%"
          height="1px"
          margin="0 auto"
          background="primary.200"
        />
        <VStack
          align="start"
          flexGrow={1}
          width="100%"
          spacing={{ lg: '144px', base: '48px' }}
        >
          <AboutRedeemSG />
          <AboutRedeemSGRewards />
        </VStack>
      </VStack>
    </>
  )
}

export default Page
