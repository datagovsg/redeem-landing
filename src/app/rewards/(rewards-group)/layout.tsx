'use client'

import { Box, VStack } from '@chakra-ui/react'

import Hero from './Hero'

import CustomNavigationTabs from '~components/CustomNavigationTabs'
import { REWARDS_ORGANISER, REWARDS_RESIDENT } from '~constants/links'

const TABS = [
  { href: REWARDS_ORGANISER, label: 'Disbursing vouchers' },
  { href: REWARDS_RESIDENT, label: 'Spending vouchers' },
] as const

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack align="stretch" flexGrow={1} width="100%" spacing={0}>
      <Hero />
      <VStack position="relative" width="100%">
        <Box
          width="100%"
          height={{ base: '94px', md: '102px', lg: '124px', xl: '144px' }}
          background="primary.100"
        />
        <Box
          width="100%"
          height={{ base: '76px', md: '120px', lg: '124px', xl: '176px' }}
          background="white"
        />
        <Box
          position="absolute"
          top={{ base: '58px', md: '70px', lg: '88px', xl: '108px' }}
          width="100%"
          padding={{
            base: '0 8px',
            ssmd: '0 58px',
            md: '0 28px',
            lg: '0 128px',
            xl: '0 148px',
          }}
        >
          <CustomNavigationTabs
            tabs={TABS}
            paddingObject={{ base: 8, smd: 8 }}
            outerBorderRadius={{
              base: '8px',
              ssmd: '16px',
              md: '16px',
              lg: '8px',
              xl: '16px',
            }}
            borderRadius={{
              base: '4px',
              ssmd: '12px',
              md: '12px',
              lg: '8px',
              xl: '12px',
            }}
            height={{
              base: '76px',
              ssmd: '52px',
              md: '64px',
              lg: '56px',
              xl: '72px',
            }}
          />
        </Box>
      </VStack>
      {children}
    </VStack>
  )
}
