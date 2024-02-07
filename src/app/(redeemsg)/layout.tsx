'use client'

import { Box, Text, VStack } from '@chakra-ui/react'

import AppFooter from '~components/AppFooter'
import CustomNavigationTabs from '~components/CustomNavigationTabs'
import NavMenu from '~components/NavMenu'
import { ACCEPTING, DISBURSING, SPENDING } from '~constants/links'
import RedeemLogoImage from '~images/RedeemLogo.svg'
import RedeemLogoWithTextImage from '~images/RedeemLogoWithText.svg'

const TABS = [
  { href: DISBURSING, label: 'Disbursing vouchers' },
  { href: SPENDING, label: 'Spending vouchers' },
  { href: ACCEPTING, label: 'Accepting vouchers' },
] as const

export default function layout({
  content,
  hero,
}: {
  hero: React.ReactNode
  content: React.ReactNode
}) {
  return (
    <VStack align="stretch" flexGrow={1} width="100%" spacing={0}>
      <NavMenu
        mobileLogo={RedeemLogoImage}
        desktopLogo={RedeemLogoWithTextImage}
        backgroundColor="primary.100"
        textColor="primary.700"
      />
      {hero}
      <VStack position="relative" width="100%">
        <Box
          width="100%"
          height={{ lg: '36px', 'md-lg': '36px', sm: '32px', base: '27px' }}
          background="primary.100"
        />
        <Box
          width="100%"
          height={{ lg: '124px', 'md-lg': '116px', sm: '96px', base: '67px' }}
          background="white"
        />
        <Box
          position="absolute"
          top="0px"
          width="100%"
          padding={{
            lg: '0 148px',
            'md-lg': '0 128px',
            sm: '0 28px',
            base: '0 14px',
          }}
        >
          <CustomNavigationTabs
            tabs={TABS}
            paddingObject={{ base: 4, smd: 8 }}
            outerBorderRadius={{
              base: '8px',
              md: '16px',
              lg: '8px',
              xl: '16px',
            }}
            borderRadius={{ base: '4px', sm: '8px', smd: '12px' }}
            height={{ lg: '72px', 'md-lg': '72px', sm: '56px', base: '54px' }}
            renderText={(label) => {
              // Since this is something we can control, we will split by space
              const individualWord = label.split(' ')
              return (
                <>
                  <Text
                    as="span"
                    textStyle={{ lg: 'h6', 'md-lg': 'subhead-1' }}
                    display={{ 'md-lg': 'block', base: 'none' }}
                  >
                    {label}
                  </Text>
                  <VStack spacing={0}>
                    <Text
                      as="span"
                      textStyle={{ base: 'custom-tab-big' }}
                      display={{ base: 'block', 'md-lg': 'none' }}
                    >
                      {individualWord[0]}
                    </Text>
                    <Text
                      as="span"
                      textStyle={{ base: 'custom-tab-small' }}
                      display={{ base: 'block', 'md-lg': 'none' }}
                    >
                      {individualWord[1]}
                    </Text>
                  </VStack>
                </>
              )
            }}
          />
        </Box>
      </VStack>
      {content}
      <AppFooter />
    </VStack>
  )
}
