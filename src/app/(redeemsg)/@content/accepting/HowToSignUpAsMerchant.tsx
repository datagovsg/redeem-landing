import { Flex, Text, VStack } from '@chakra-ui/react'

import RSGInstruction from '../../RSGInstruction'

import Badge from '~components/Badge'
import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { genStepIndexForInstructions } from '~helper'
import HowToSignUpAsMerchantImage from '~images/HowToSignUpAsMerchant.svg'
import SetUpAsMerchantStep1Image from '~images/SetUpAsMerchantStep1.svg'
import SetUpAsMerchantStep2Image from '~images/SetUpAsMerchantStep2.svg'
import SetUpAsMerchantStep3Image from '~images/SetUpAsMerchantStep3.svg'

const INSTRUCTIONS = genStepIndexForInstructions([
  {
    imageSrc: SetUpAsMerchantStep1Image,
    stepInstruction:
      "Find your scheme's sign-up page to receive your vouchers.",
    stepTitle: 'Indicate your interest',
  },
  {
    imageSrc: SetUpAsMerchantStep2Image,
    stepInstruction: (
      <Text textStyle={{ lg: 'body-1' }} color="neutral.700">
        {'Only trust voucher links from '}
        <Text as="span" textStyle={{ lg: 'text-editor-bold' }}>
          voucher.redeem.gov.sg.
        </Text>
      </Text>
    ),
    stepTitle: 'Download the app',
  },
  {
    imageSrc: SetUpAsMerchantStep3Image,
    stepInstruction: 'Use the vouchers at participating merchants.',
    stepTitle: 'Onboard your shop onto the RedeemSG app',
  },
])

const HowToSignUpAsMerchant = () => {
  return (
    <SectionContainer>
      <Flex
        alignItems={{ base: 'center', sm: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        flexGrow={1}
        gap={{ base: '40px' }}
        maxWidth="1440px"
        padding={{
          lg: '0 148px 88px',
          md: '0 128px 80px',
          sm: '0 88px 64px',
          base: '0 24px 40px',
        }}
        boxSizing="content-box"
      >
        <VStack align="start" spacing={{ md: '24px', base: '16px' }}>
          <Badge text="For CDC Vouchers Scheme 2024" />
          <VStack spacing={{ md: '40px', base: '32px' }}>
            <Text
              textStyle={{ lg: 'h1', sm: 'h2', base: 'h3-semibold' }}
              color="neutral.900"
            >
              How to sign up as a merchant
            </Text>
            <VStack align="start" spacing={{ lg: '40px', base: '32px' }}>
              {INSTRUCTIONS.map((instruction) => (
                <RSGInstruction {...instruction} key={instruction.stepIndex} />
              ))}
            </VStack>
          </VStack>
        </VStack>
        <Image
          src={HowToSignUpAsMerchantImage}
          alt="how to signup as merchant"
          width={{ base: '280px', sm: '324px', lg: '484px' }}
        />
      </Flex>
    </SectionContainer>
  )
}

export default HowToSignUpAsMerchant
