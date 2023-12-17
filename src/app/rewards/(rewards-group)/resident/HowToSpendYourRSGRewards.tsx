import { VStack, Text, Flex, Link } from '@chakra-ui/react'
import { Image } from '~components/Image'
import HowToSpendYourRSGRewardsImage from '~images/HowToSpendYourRSGRewards.svg'
import SpendRSGRewardsStep1Image from '~images/SpendRSGRewardsStep1.svg'
import SpendRSGRewardsStep2Image from '~images/SpendRSGRewardsStep2.svg'
import SpendRSGRewardsStep3Image from '~images/SpendRSGRewardsStep3.svg'
import Instruction from '../Instruction'
import { RSG_REWARDS_WHERE_TO_SPEND } from '~constants/links'
import SectionContainer from '~components/SectionContainer'

// I could leave out the index, but just adding it in manually
const INSTRUCTIONS = [
  {
    stepIndex: 1,
    stepInstruction: (
      <Text textStyle="body-1" color="neutral.700">
        {
          'Receive vouchers from government agencies. Only trust voucher links starting with '
        }
        <Text as="span" textStyle="text-editor-bold">
          voucher.redeem.gov.sg.
        </Text>
      </Text>
    ),
    imageSrc: SpendRSGRewardsStep1Image,
  },
  {
    stepIndex: 2,
    stepInstruction: (
      <Text textStyle="body-1" color="neutral.700">
        <Text as="span">{'Go to '}</Text>
        <Link
          as="a"
          textStyle="text-editor-link"
          color="primary.500"
          href={RSG_REWARDS_WHERE_TO_SPEND}
          isExternal
        >
          {'any participating supermarket ↪'}
        </Link>
        <Text as="span">{' near you to spend your vouchers.'}</Text>
      </Text>
    ),
    imageSrc: SpendRSGRewardsStep2Image,
  },
  {
    stepIndex: 3,
    stepInstruction: (
      <Text textStyle="body-1" color="neutral.700">
        Show your voucher’s QR code to the cashier while you are making payment.
      </Text>
    ),
    imageSrc: SpendRSGRewardsStep3Image,
  },
] as const

const HowToSpendYourRSGRewards = () => {
  return (
    <SectionContainer padding={{ md: '0 148px 88px', base: '0 24px 40px' }}>
      <Flex
        flexDirection={{ md: 'row', base: 'column' }}
        flexGrow={1}
        gap={{ md: '132px', base: '40px' }}
        height={{ md: '440px', base: 'fit-content' }}
      >
        <VStack align="start" spacing={{ md: '44px', base: '32px' }}>
          <Text
            textStyle={{ md: 'h1', base: 'h3-semibold' }}
            color="neutral.900"
          >
            How to spend your RedeemSG Rewards
          </Text>
          <VStack align="start" spacing={{ md: '40px', base: '32px' }}>
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
