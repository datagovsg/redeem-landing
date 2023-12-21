import { Link, Text, VStack } from '@chakra-ui/react'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import SupermarketImage from '~images/Supermarket.svg'

const OrganiserHero = () => {
  return (
    <SectionContainer>
      <VStack
        padding={{ base: '0 24px 40px', lg: '0 148px 88px' }}
        spacing={{ base: '40px', lg: '80px' }}
      >
        <VStack textAlign="center" spacing={{ base: '24px', lg: '16px' }}>
          <Text
            textStyle={{ base: 'h3-semibold', lg: 'h1' }}
            color="neutral.900"
          >
            Simplifying operations needed from agencies to onboard, train, and
            manage merchants.
          </Text>
          <Text
            textStyle={{ base: 'text-editor-link', lg: 'inter' }}
            color="neutral.700"
          >
            Simply decide on the voucher amount and validity period, and issue
            the vouchers to eligible recipients! These vouchers can be spent at{' '}
            <Link
              as="span"
              textStyle={{ base: 'body-1', lg: 'text-editor-link' }}
              color="primary.500"
            >
              all participating supermarkets ↪
            </Link>
          </Text>
        </VStack>
        <Image src={SupermarketImage} alt="RedeemSG Organiser Page" />
      </VStack>
    </SectionContainer>
  )
}

export default OrganiserHero
