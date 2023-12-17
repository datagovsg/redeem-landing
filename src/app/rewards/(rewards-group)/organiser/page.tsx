'use client'
import { Divider } from '@chakra-ui/react'

import CTAToSetUpRSGRewards from './CTAToSetUpRSGRewards'
import OrganiserHero from './OrganiserHero'
import QuestionsForSetupCampaign from './QuestionsForSetupCampaign'
import SetUpYourRSGCampaign from './SetUpYourRSGCampaign'

export default function Page() {
  return (
    <>
      <OrganiserHero />
      <Divider
        width={{
          base: 'calc(100% - (2 * 24px))',
          md: 'calc(100% - (2 * 148px))',
        }}
        height="1px"
        margin="0 auto"
        background="primary.200"
      />
      <SetUpYourRSGCampaign />
      <QuestionsForSetupCampaign />
      <CTAToSetUpRSGRewards />
    </>
  )
}
