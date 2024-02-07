import { Flex, Link, Text, VStack } from '@chakra-ui/react'

import RSGRewardsInstruction from '../RSGRewardsInstruction'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { RSG_REWARDS_WHERE_TO_SPEND } from '~constants/links'
import { genStepIndexForInstructions } from '~helper'
import HowToSpendYourRSGRewardsImage from '~images/HowToSpendYourRSGRewards.svg'
import SpendRSGRewardsStep1Image from '~images/SpendRSGRewardsStep1.svg'
import SpendRSGRewardsStep2Image from '~images/SpendRSGRewardsStep2.svg'
import SpendRSGRewardsStep3Image from '~images/SpendRSGRewardsStep3.svg'

// I could leave out the index, but just adding it in manually
const INSTRUCTIONS = genStepIndexForInstructions([
  {
    imageSrc: SpendRSGRewardsStep1Image,
    stepInstruction: (
      <Text
        textStyle={{ base: 'body-1', sm: 'body-2', lg: 'body-1' }}
        color="neutral.700"
      >
        {
          'Receive vouchers from agencies onboarded to RedeemSG. Only trust voucher links starting with '
        }
        <Text
          as="span"
          textStyle={{
            base: 'text-editor-bold',
            ssmd: 'text-editor-bold-non-mobile',
            xl: 'text-editor-bold',
          }}
        >
          voucher.redeem.gov.sg.
        </Text>
      </Text>
    ),
  },
  {
    imageSrc: SpendRSGRewardsStep2Image,
    stepInstruction: (
      <Text
        textStyle={{ base: 'body-1', sm: 'body-2', lg: 'body-1' }}
        color="neutral.700"
      >
        <Text as="span">{'Go to '}</Text>
        <Link
          textStyle={{
            base: 'text-editor-link',
            md: 'text-editor-link-small',
            lg: 'text-editor-link',
          }}
          color="primary.500"
          textDecoration="underline"
          _hover={{
            color: 'primary.600',
          }}
          href={RSG_REWARDS_WHERE_TO_SPEND}
          isExternal
        >
          any participating supermarket ↪&#xFE0E;
        </Link>
        <Text as="span">{' near you to spend your vouchers.'}</Text>
      </Text>
    ),
  },
  {
    imageSrc: SpendRSGRewardsStep3Image,
    stepInstruction: (
      <Text
        textStyle={{ base: 'body-1', sm: 'body-2', lg: 'body-1' }}
        color="neutral.700"
      >
        Show your voucher&apos;s QR code to the cashier while you are making
        payment.
      </Text>
    ),
  },
])

const HowToSpendYourRSGRewards = () => {
  return (
    <SectionContainer>
      <VStack
        alignItems={{ base: 'center', sm: 'flex-start', lg: 'flex-start' }}
        justifyContent="space-between"
        flexGrow={1}
        gap={{ base: '32px', sm: '24px', ssmd: '24px', md: '44px' }}
        maxWidth="1440px"
        height="fit-content"
        padding={{
          base: '0 24px 40px',
          ssmd: '0 58px 52px',
          md: '0 88px 88px',
          lg: '0 128px 88px',
          xl: '0 148px 88px',
        }}
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
          textAlign={{ base: 'left', md: 'center', lg: 'left' }}
        >
          How to spend your RedeemSG Rewards
        </Text>
        <Flex
          alignItems="start"
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{
            base: '32px',
            ssmd: '44px',
            md: '68px',
            lg: '44px',
            xl: '44px',
          }}
        >
          <VStack
            align="start"
            spacing={{ base: '32px', md: '32px', lg: '32px', xl: '40px' }}
          >
            {INSTRUCTIONS.map((instruction) => (
              <RSGRewardsInstruction
                {...instruction}
                key={instruction.stepIndex}
              />
            ))}
          </VStack>
          <Image
            src={HowToSpendYourRSGRewardsImage}
            alt="How to spend your RedeemSG Rewards Image"
            width={{ base: '280px', sm: '232px', md: '302px' }}
          />
        </Flex>
      </VStack>
    </SectionContainer>
  )
}

export default HowToSpendYourRSGRewards
