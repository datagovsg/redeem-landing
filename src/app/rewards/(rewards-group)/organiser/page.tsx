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
          md: 'calc(100% - (2 * 128px))',
          lg: 'calc(100% - (2 * 148px))',
        }}
        margin="0 auto"
        borderColor="primary.200"
      />
      <SetUpYourRSGCampaign />
      <QuestionsForSetupCampaign />
      <CTAToSetUpRSGRewards />
    </>
  )
}
