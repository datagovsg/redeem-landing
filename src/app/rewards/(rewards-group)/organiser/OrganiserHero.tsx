import { Link, Text, VStack } from '@chakra-ui/react'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { RSG_REWARDS_WHERE_TO_SPEND } from '~constants/links'
import SupermarketImage from '~images/Supermarket.svg'

const OrganiserHero = () => {
  return (
    <SectionContainer>
      <VStack
        maxWidth="1440px"
        padding={{ base: '0 24px 40px', md: '88px 128px', lg: '0 148px 88px' }}
        boxSizing="content-box"
        spacing={{ base: '40px', md: '44px', lg: '80px' }}
      >
        <VStack
          textAlign="center"
          spacing={{ base: '24px', md: '16px', lg: '16px' }}
        >
          <Text
            textStyle={{ base: 'h3-semibold', md: 'h2', lg: 'h1' }}
            color="neutral.900"
          >
            Simplifying operations needed from agencies to onboard, train, and
            manage merchants.
          </Text>
          <Text
            textStyle={{
              base: 'text-editor-link',
              md: 'text-editor-link-small',
              lg: 'inter',
            }}
            color="neutral.700"
          >
            {
              'Simply decide on the voucher amount and validity period, and issue the vouchers to eligible recipients! These vouchers can be spent at '
            }
            <Link
              // textStyle={{ base: 'body-1', lg: 'text-editor-link' }}
              color="primary.500"
              textDecoration="underline"
              href={RSG_REWARDS_WHERE_TO_SPEND}
              isExternal
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
