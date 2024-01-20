import { Flex, Link, Text, VStack } from '@chakra-ui/react'

import Instruction from '../Instruction'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { RSG_REWARDS_WHERE_TO_SPEND } from '~constants/links'
import HowToSpendYourRSGRewardsImage from '~images/HowToSpendYourRSGRewards.svg'
import SpendRSGRewardsStep1Image from '~images/SpendRSGRewardsStep1.svg'
import SpendRSGRewardsStep2Image from '~images/SpendRSGRewardsStep2.svg'
import SpendRSGRewardsStep3Image from '~images/SpendRSGRewardsStep3.svg'

// I could leave out the index, but just adding it in manually
const INSTRUCTIONS = [
  {
    imageSrc: SpendRSGRewardsStep1Image,
    stepIndex: 1,
    stepInstruction: (
      <Text textStyle="body-1" color="neutral.700">
        {
          'Receive vouchers from government agencies. Always only trust voucher links starting with '
        }
        <Text as="span" textStyle="text-editor-bold">
          voucher.redeem.gov.sg.
        </Text>
      </Text>
    ),
  },
  {
    imageSrc: SpendRSGRewardsStep2Image,
    stepIndex: 2,
    stepInstruction: (
      <Text textStyle="body-1" color="neutral.700">
        <Text as="span">{'Go to '}</Text>
        <Link
          as="a"
          textStyle={{
            base: 'text-editor-link',
            md: 'text-editor-link-small',
            lg: 'text-editor-link',
          }}
          color="primary.500"
          href={RSG_REWARDS_WHERE_TO_SPEND}
          isExternal
        >
          {'any participating supermarket ↪'}
        </Link>
        <Text as="span">{' near you to spend your vouchers.'}</Text>
      </Text>
    ),
  },
  {
    imageSrc: SpendRSGRewardsStep3Image,
    stepIndex: 3,
    stepInstruction: (
      <Text textStyle="body-1" color="neutral.700">
        Show your voucher&apos;s QR code to the cashier while you are making
        payment.
      </Text>
    ),
  },
] as const

const HowToSpendYourRSGRewards = () => {
  return (
    <SectionContainer>
      <Flex
        alignItems={{ base: 'center' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        flexGrow={1}
        gap={{ base: '40px', lg: '132px' }}
        maxWidth="1440px"
        height="fit-content"
        padding={{ base: '0 24px 40px', lg: '0 148px 88px' }}
        boxSizing="content-box"
      >
        <VStack align="start" spacing={{ base: '32px', lg: '44px' }}>
          <Text
            textStyle={{ base: 'h3-semibold', md: 'h2', lg: 'h1' }}
            color="neutral.900"
          >
            How to spend your RedeemSG Rewards
          </Text>
          <VStack
            align="start"
            spacing={{ base: '32px', md: '32px', lg: '40px' }}
          >
            {INSTRUCTIONS.map((instruction) => (
              <Instruction {...instruction} key={instruction.stepIndex} />
            ))}
          </VStack>
        </VStack>
        <Image
          src={HowToSpendYourRSGRewardsImage}
          alt="How to spend your RedeemSG Rewards Image"
        />
      </Flex>
    </SectionContainer>
  )
}

export default HowToSpendYourRSGRewards
