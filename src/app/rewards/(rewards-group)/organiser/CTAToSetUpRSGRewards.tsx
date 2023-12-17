import { Text, VStack } from '@chakra-ui/react'
import { Button, useIsMobile } from '@opengovsg/design-system-react'
import { BiRightArrowAlt } from 'react-icons/bi'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { RSG_CDC_CAMPAIGN_ORGANISER_FORM } from '~constants/links'
import { openInNewTab } from '~helper'
import CTAToSetUpRSGRewardsImage from '~images/CTAToSetupRSGRewards.svg'

const CTAToSetUpRSGRewards = () => {
  const isMobile = useIsMobile()
  const ctaToSetUpPromptTextWithBreaklines = isMobile
    ? 'Have a campaign? If you are interested in\n issuing your own RedeemSG Rewards,\n share your use case with us.'
    : 'Have a campaign? If you are interested in issuing your own\n RedeemSG Rewards, share your use case with us.'

  const primaryTextWithBreaklines = isMobile
    ? 'Ready to set up your\n own RedeemSG\n Rewards?'
    : 'Ready to set up your own\n RedeemSG Rewards?'

  return (
    <SectionContainer background="primary.700">
      <VStack
        alignItems="center"
        padding={{ base: '56px 24px', md: '88px 148px' }}
        textAlign="center"
        spacing="32px"
      >
        <Image
          src={CTAToSetUpRSGRewardsImage}
          alt="Ready to set up your own RedeemSG Rewards?"
        />
        <VStack spacing={{ base: '32px', md: '8px' }}>
          <Text
            textStyle={{ base: 'display-2-mobile', md: 'h1' }}
            color="white"
            whiteSpace="pre-line"
          >
            {primaryTextWithBreaklines}
          </Text>
          {/* Have to do manual break for both mobile and desktop because 
              desktop already have the manual break of \n, which implicates 
              that the mobile also have to do it
            */}
          <Text textStyle="body-1" color="white" whiteSpace="pre-line">
            {ctaToSetUpPromptTextWithBreaklines}
          </Text>
        </VStack>
        <Button
          variant="outline"
          rightIcon={<BiRightArrowAlt />}
          onClick={() => openInNewTab(RSG_CDC_CAMPAIGN_ORGANISER_FORM)}
        >
          Talk to us
        </Button>
      </VStack>
    </SectionContainer>
  )
}

export default CTAToSetUpRSGRewards
