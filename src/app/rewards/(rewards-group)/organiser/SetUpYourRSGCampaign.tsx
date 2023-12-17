import { Flex, VStack, Text } from '@chakra-ui/react'
import SetUpRSGCampaignStep1Image from '~images/SetUpRSGCampaignStep1.svg'
import SetUpRSGCampaignStep2Image from '~images/SetUpRSGCampaignStep2.svg'
import SetUpRSGCampaignStep3Image from '~images/SetUpRSGCampaignStep3.svg'
import SetUpYourRSGCampaignImage from '~images/SetUpYourRSGCampaign.svg'
import { Image } from '~components/Image'

import Instruction from '../Instruction'
import SectionContainer from '~components/SectionContainer'

const INSTRUCTIONS = [
  {
    stepIndex: 1,
    stepInstruction:
      'Set up the campaign on RedeemSG. Decide the voucher amount and validity period.',
    imageSrc: SetUpRSGCampaignStep1Image,
  },
  {
    stepIndex: 2,
    stepInstruction:
      'Vouchers can be directly sent to eligible recipients, or recipients can claim vouchers after logging in with Singpass to verify their details.',
    imageSrc: SetUpRSGCampaignStep2Image,
  },
  {
    stepIndex: 3,
    stepInstruction:
      'Track campaign performance. Easily monitor your campaigns’ performance on the dashboard or reports provided.',
    imageSrc: SetUpRSGCampaignStep3Image,
  },
] as const

const SetUpYourRSGCampaign = () => {
  return (
    <SectionContainer padding={{ md: '88px 148px', base: '40px 24px' }}>
      <Flex
        flexDirection={{ md: 'row', base: 'column' }}
        flexGrow={1}
        gap={{ md: '132px', base: '40px' }}
      >
        <VStack align="start" spacing={{ md: '44px', base: '32px' }}>
          <Text
            textStyle={{ md: 'h1', base: 'h3-semibold' }}
            color="neutral.900"
          >
            Setting up your RedeemSG Rewards campaign
          </Text>
          <VStack align="start" spacing={{ md: '40px', base: '32px' }}>
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
