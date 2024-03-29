import { Flex, Text, VStack } from '@chakra-ui/react'

import RSGRewardsInstruction from '../RSGRewardsInstruction'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { genStepIndexForInstructions } from '~helper'
import SetUpRSGCampaignStep1Image from '~images/SetUpRSGCampaignStep1.svg'
import SetUpRSGCampaignStep2Image from '~images/SetUpRSGCampaignStep2.svg'
import SetUpRSGCampaignStep3Image from '~images/SetUpRSGCampaignStep3.svg'
import SetUpYourRSGCampaignImage from '~images/SetUpYourRSGCampaign.svg'

const INSTRUCTIONS = genStepIndexForInstructions([
  {
    imageSrc: SetUpRSGCampaignStep1Image,
    stepInstruction:
      'Set up the campaign on RedeemSG. Decide the voucher amount and validity period.',
  },
  {
    imageSrc: SetUpRSGCampaignStep2Image,
    stepInstruction:
      'Vouchers can be directly sent to eligible recipients, or recipients can claim vouchers after logging in with Singpass to verify their details.',
  },
  {
    imageSrc: SetUpRSGCampaignStep3Image,
    stepInstruction:
      "Track campaign performance. Easily monitor your campaigns' performance on the dashboard or reports provided.",
  },
])

const SetUpYourRSGCampaign = () => {
  return (
    <SectionContainer
      padding={{
        base: '40px 24px',
        ssmd: '52px 58px',
        md: '88px',
        lg: '88px 128px',
        xl: '88px 148px',
      }}
    >
      <VStack
        alignItems={{ base: 'center', sm: 'flex-start' }}
        flexGrow={1}
        gap={{ base: '32px', sm: '24px', md: '44px' }}
        maxWidth="1440px"
        boxSizing="content-box"
      >
        <Text
          textStyle={{
            base: 'h3-semibold',
            ssmd: 'header-text-ssmd',
            md: 'h2',
            lg: 'h2',
            xl: 'h1',
          }}
          color="neutral.900"
          textAlign={{ base: 'left', md: 'center', xl: 'left' }}
        >
          Setting up your RedeemSG Rewards campaign
        </Text>
        <Flex
          alignItems="start"
          flexDirection={{ base: 'column', ssmd: 'column', md: 'row' }}
          gap={{ base: '40px', md: '68px', lg: '72px', xl: '132px' }}
        >
          <VStack align="start" spacing={{ base: '32px', xl: '40px' }}>
            {INSTRUCTIONS.map((instruction) => (
              <RSGRewardsInstruction
                {...instruction}
                key={instruction.stepIndex}
              />
            ))}
          </VStack>
          <Image
            src={SetUpYourRSGCampaignImage}
            alt="Setting up your RedeemSG Rewards campaign"
            width={{
              base: '280px',
              sm: '220px',
              ssmd: '232px',
              md: '232px',
              lg: '302px',
              '2xl': '411px',
            }}
          />
        </Flex>
      </VStack>
    </SectionContainer>
  )
}

export default SetUpYourRSGCampaign
