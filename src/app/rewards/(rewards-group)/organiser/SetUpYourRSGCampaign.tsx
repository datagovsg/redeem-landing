import { Flex, Text, VStack } from '@chakra-ui/react'

import Instruction from '../Instruction'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import SetUpRSGCampaignStep1Image from '~images/SetUpRSGCampaignStep1.svg'
import SetUpRSGCampaignStep2Image from '~images/SetUpRSGCampaignStep2.svg'
import SetUpRSGCampaignStep3Image from '~images/SetUpRSGCampaignStep3.svg'
import SetUpYourRSGCampaignImage from '~images/SetUpYourRSGCampaign.svg'

const INSTRUCTIONS = [
  {
    imageSrc: SetUpRSGCampaignStep1Image,
    stepIndex: 1,
    stepInstruction:
      'Set up the campaign on RedeemSG. Decide the voucher amount and validity period.',
  },
  {
    imageSrc: SetUpRSGCampaignStep2Image,
    stepIndex: 2,
    stepInstruction:
      'Vouchers can be directly sent to eligible recipients, or recipients can claim vouchers after logging in with Singpass to verify their details.',
  },
  {
    imageSrc: SetUpRSGCampaignStep3Image,
    stepIndex: 3,
    stepInstruction:
      "Track campaign performance. Easily monitor your campaigns' performance on the dashboard or reports provided.",
  },
] as const

const SetUpYourRSGCampaign = () => {
  return (
    <SectionContainer padding={{ base: '40px 24px', md: '88px 148px' }}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        flexGrow={1}
        gap={{ base: '40px', md: '132px' }}
      >
        <VStack align="start" spacing={{ base: '32px', md: '44px' }}>
          <Text
            textStyle={{ base: 'h3-semibold', md: 'h1' }}
            color="neutral.900"
          >
            Setting up your RedeemSG Rewards campaign
          </Text>
          <VStack align="start" spacing={{ base: '32px', md: '40px' }}>
            {INSTRUCTIONS.map((instruction) => (
              <Instruction {...instruction} key={instruction.stepIndex} />
            ))}
          </VStack>
        </VStack>
        <Image
          src={SetUpYourRSGCampaignImage}
          alt="Setting up your RedeemSG Rewards campaign"
        />
      </Flex>
    </SectionContainer>
  )
}

export default SetUpYourRSGCampaign
