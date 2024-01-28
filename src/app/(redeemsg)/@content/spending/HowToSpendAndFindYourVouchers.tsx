import { Flex, Text, VStack } from '@chakra-ui/react'

import RSGInstruction from '../../RSGInstruction'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { genStepIndexForInstructions } from '~helper'
import HowToFindAndSpendYourVouchersImage from '~images/HowToFindAndSpendYourVouchers.svg'
import RSGFindAndSpendVoucherStep1Image from '~images/RSGFindAndSpendVoucherStep1.svg'
import RSGFindAndSpendVoucherStep2Image from '~images/RSGFindAndSpendVoucherStep2.svg'
import RSGFindAndSpendVoucherStep3Image from '~images/RSGFindAndSpendVoucherStep3.svg'

const INSTRUCTIONS = genStepIndexForInstructions([
  {
    imageSrc: RSGFindAndSpendVoucherStep1Image,
    stepInstruction:
      "Find your scheme's sign-up page to receive your vouchers.",
    stepTitle: 'Sign up',
  },
  {
    imageSrc: RSGFindAndSpendVoucherStep2Image,
    stepInstruction: (
      <Text textStyle={{ lg: 'body-1' }} color="neutral.700">
        {'Only trust voucher links from '}
        <Text as="span" textStyle={{ lg: 'text-editor-bold' }}>
          voucher.redeem.gov.sg.
        </Text>
      </Text>
    ),
    stepTitle: 'Receive your unique voucher link',
  },
  {
    imageSrc: RSGFindAndSpendVoucherStep3Image,
    stepInstruction: 'Use the vouchers at participating merchants.',
    stepTitle: 'Show your QR code for payment',
  },
])

const HowToSpendAndFindYourVouchers = () => {
  return (
    <SectionContainer>
      <Flex
        alignItems={{ base: 'center' }}
        justifyContent="space-between"
        flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
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
        <VStack
          alignItems="start"
          spacing={{ lg: '40px', md: '40px', sm: '32px', base: '32px' }}
        >
          <Text
            textStyle={{ lg: 'h1', md: 'h2', sm: 'h2', base: 'h3-semibold' }}
            color="neutral.900"
          >
            How to find and spend your vouchers
          </Text>
          <VStack
            align="start"
            spacing={{ lg: '40px', md: '32px', sm: '32px', base: '32px' }}
          >
            {INSTRUCTIONS.map((instruction) => (
              <RSGInstruction {...instruction} key={instruction.stepIndex} />
            ))}
          </VStack>
        </VStack>
        <Image
          src={HowToFindAndSpendYourVouchersImage}
          alt="How to find and spend your vouchers"
        />
      </Flex>
    </SectionContainer>
  )
}

export default HowToSpendAndFindYourVouchers