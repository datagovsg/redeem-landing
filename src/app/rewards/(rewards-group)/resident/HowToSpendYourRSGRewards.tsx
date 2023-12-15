import { VStack, Text, Flex, Link } from '@chakra-ui/react'
import { Image } from '~components/Image'
import HowToSpendYourRSGRewardsImage from '~images/HowToSpendYourRSGRewards.svg'
import SpendRSGRewardsStep1Image from '~images/SpendRSGRewardsStep1.svg'
import SpendRSGRewardsStep2Image from '~images/SpendRSGRewardsStep2.svg'
import SpendRSGRewardsStep3Image from '~images/SpendRSGRewardsStep3.svg'
import HowToSpendYourRSGRewardsInstruction from './HowToSpendYourRSGRewardsInstruction'

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
          color="primary.500"
          fontWeight={500}
          href="https://redeem.gov.sg/rewards/wheretospend"
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
    <VStack
      as="main"
      align="stretch"
      flexGrow={1}
      padding={{ md: '0 148px 88px', base: '0 24px 40px' }}
      spacing={0}
    >
      <Flex
        flexDirection={{ md: 'row', base: 'column' }}
        flexGrow={1}
        gap={{ md: '132px', base: '40px' }}
        height={{ md: '440px', base: 'fit-content' }}
      >
        <VStack align="start" flex="1" spacing="44px">
          <Text
            textStyle={{ md: 'h1', base: 'h3-semibold' }}
            color="neutral.900"
          >
            How to spend your RedeemSG Rewards
          </Text>
          <VStack align="start" spacing="40px">
            {INSTRUCTIONS.map((instruction) => (
              <HowToSpendYourRSGRewardsInstruction
                {...instruction}
                key={instruction.stepIndex}
              />
            ))}
          </VStack>
        </VStack>
        <Image
          src={HowToSpendYourRSGRewardsImage}
          alt="How to spend your RedeemSG Rewards Image"
        />
      </Flex>
    </VStack>
  )
}

export default HowToSpendYourRSGRewards
