'use client'
import { Divider } from '@chakra-ui/react'
import OrganiserHero from './OrganiserHero'
import SetUpYourRSGCampaign from './SetUpYourRSGCampaign'
import QuestionsForSetupCampaign from './QuestionsForSetupCampaign'
import CTAToSetUpRSGRewards from './CTAToSetUpRSGRewards'

export default function Page() {
  return (
    <>
      <OrganiserHero />
      <Divider
        width={{
          md: 'calc(100% - (2 * 148px))',
          base: 'calc(100% - (2 * 24px))',
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
