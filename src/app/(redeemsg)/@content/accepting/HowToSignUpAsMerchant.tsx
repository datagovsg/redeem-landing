import { Flex, Link, Text, VStack } from '@chakra-ui/react'

import RSGInstruction from '../../RSGInstruction'

import Badge from '~components/Badge'
import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { RSG_CDC_MERCHANT_FORM } from '~constants/links'
import { genStepIndexForInstructions } from '~helper'
import HowToSignUpAsMerchantImage from '~images/HowToSignUpAsMerchant.svg'
import SetUpAsMerchantStep1Image from '~images/SetUpAsMerchantStep1.svg'
import SetUpAsMerchantStep2Image from '~images/SetUpAsMerchantStep2.svg'
import SetUpAsMerchantStep3Image from '~images/SetUpAsMerchantStep3.svg'

const INSTRUCTIONS = genStepIndexForInstructions([
  {
    imageSrc: SetUpAsMerchantStep1Image,
    stepInstruction: (
      <Text textStyle={{ base: 'body-1' }} color="neutral.700">
        {'Indicate your interest on '}
        <Link
          textStyle={{
            base: 'text-editor-link',
            'md-lg': 'text-editor-link-small',
            lg: 'text-editor-link',
          }}
          color="primary.500"
          textDecoration="underline"
          _hover={{
            color: 'primary.600',
          }}
          href={RSG_CDC_MERCHANT_FORM}
          isExternal
        >
          this form
        </Link>
        {
          '. Sign up with a Digital Ambassador or CDC Ambassador. Receive a shop code.'
        }
      </Text>
    ),
    stepTitle: 'Indicate your interest',
  },
  {
    imageSrc: SetUpAsMerchantStep2Image,
    stepInstruction:
      'Download the RedeemSG Merchant app on the App Store or Google Play.',
    stepTitle: 'Download the app',
  },
  {
    imageSrc: SetUpAsMerchantStep3Image,
    stepInstruction:
      'Key in the shop code to gain access to your shop account. Other staff can also onboard using this same shop code.',
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
          'md-lg': '0 128px 80px',
          sm: '0 88px 64px',
          base: '0 24px 40px',
        }}
        boxSizing="content-box"
      >
        <VStack align="start" spacing={{ 'md-lg': '24px', base: '16px' }}>
          <Badge text="For CDC Vouchers Scheme 2024" />
          <VStack align="start" spacing={{ 'md-lg': '40px', base: '32px' }}>
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
