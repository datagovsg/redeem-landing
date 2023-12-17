import { VStack, Text, Link } from '@chakra-ui/react'
import SupermarketImage from '~images/Supermarket.svg'
import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'

const OrganiserHero = () => {
  return (
    <SectionContainer>
      <VStack
        padding={{ md: '0 148px 88px', base: '0 24px 40px' }}
        spacing={{ md: '80px', base: '40px' }}
      >
        <VStack textAlign="center" spacing={{ md: '16px', base: '24px' }}>
          <Text
            textStyle={{ md: 'h1', base: 'h3-semibold' }}
            color="neutral.900"
          >
            Simplifying operations needed from agencies to onboard, train, and
            manage merchants.
          </Text>
          <Text
            textStyle={{ md: 'inter', base: 'text-editor-link' }}
            color="neutral.700"
          >
            Simply decide on the voucher amount and validity period, and issue
            the vouchers to eligible recipients! These vouchers can be spent at{' '}
            <Link
              as="span"
              textStyle={{ md: 'text-editor-link', base: 'body-1' }}
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
