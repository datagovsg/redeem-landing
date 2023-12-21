'use client'

import { Box, VStack } from '@chakra-ui/react'

import Hero from '../Hero'

import CustomNavigationTabs from '~components/CustomNavigationTabs'
import { REWARDS_ORGANISER, REWARDS_RESIDENT } from '~constants/links'

const TABS = [
  { href: REWARDS_RESIDENT, label: 'Spending vouchers' },
  { href: REWARDS_ORGANISER, label: 'Disbursing vouchers' },
] as const

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack align="stretch" flexGrow={1} width="100%" spacing={0}>
      <Hero />
      <VStack position="relative" width="100%">
        <Box
          width="100%"
          height={{ base: '94px', md: '124px', lg: '144px' }}
          background="primary.100"
        />
        <Box
          width="100%"
          height={{ base: '76px', md: '124px', lg: '176px' }}
          background="white"
        />
        <Box
          position="absolute"
          top={{ base: '58px', md: '88px', lg: '108px' }}
          width="100%"
          padding={{ base: '0 8px', md: '0 128px', lg: '0 148px' }}
        >
          <CustomNavigationTabs tabs={TABS} />
        </Box>
      </VStack>
      {children}
    </VStack>
  )
}
