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
        padding={{
          base: '0 24px 40px',
          ssmd: '0 58px 52px',
          md: '0 88px 88px',
          lg: '0 128px 88px',
          xl: '0 148px 88px',
        }}
        boxSizing="content-box"
        spacing={{
          base: '40px',
          ssmd: '44px',
          md: '44px',
          lg: '44px',
          xl: '80px',
        }}
      >
        <VStack
          textAlign="center"
          spacing={{
            base: '24px',
            ssmd: '16px',
            md: '16px',
            lg: '16px',
            xl: '16px',
          }}
        >
          <Text
            textStyle={{
              base: 'h3-semibold',
              ssmd: 'header-text-ssmd',
              md: 'h3-semibold',
              lg: 'h2',
              xl: 'h1',
            }}
            color="neutral.900"
          >
            Simplifying operations needed from agencies to onboard, train, and
            manage merchants.
          </Text>
          <Text
            textStyle={{
              base: 'text-editor-link',
              ssmd: 'body-2',
              md: 'body-2',
              lg: 'text-editor-link-small',
              xl: 'inter',
            }}
            color="neutral.700"
          >
            {
              'Simply decide on the voucher amount and validity period, and issue the vouchers to eligible recipients! These vouchers can be spent at '
            }
            <Link
              textStyle={{
                base: 'text-editor-link',
                ssmd: 'text-editor-link-small',
                md: 'text-editor-link-small',
                lg: 'text-editor-link-small',
                xl: 'text-editor-link',
              }}
              color="primary.500"
              textDecoration="underline"
              _hover={{
                color: 'primary.600',
              }}
              whiteSpace="nowrap"
              href={RSG_REWARDS_WHERE_TO_SPEND}
              isExternal
            >
              {/* https://css-tricks.com/text-that-sometimes-turns-to-emojis/ */}
              all participating supermarkets ↪&#xFE0E;
            </Link>
          </Text>
        </VStack>
        <Image
          src={SupermarketImage}
          alt="RedeemSG Organiser Page"
          width={{
            base: '280px',
            ssmd: '352px',
            md: '472px',
            lg: '606px',
            xl: '800px',
          }}
        />
      </VStack>
    </SectionContainer>
  )
}

export default OrganiserHero
