'use client'

import { usePathname } from 'next/navigation'
import CustomNavigationTabs from '~components/CustomNavigationTabs'
import { Box, VStack } from '@chakra-ui/react'

const TABS = [
  { label: 'Spending vouchers', href: '/rewards/resident' },
  { label: 'Disbursing vouchers', href: '/rewards/organiser' },
] as const

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack align="stretch" flexGrow={1} width="100%" spacing={0}>
      <VStack position="relative" width="100%">
        <Box
          width="100%"
          height={{ md: '144px', base: '94px' }}
          background="primary.100"
        />
        <Box
          width="100%"
          height={{ md: '176px', base: '76px' }}
          background="white"
        />
        <Box
          position="absolute"
          top={{ md: '108px', base: '58px' }}
          width="100%"
          padding={{ md: '0 148px', base: '0 8px' }}
        >
          <CustomNavigationTabs tabs={TABS} />
        </Box>
      </VStack>
      {children}
    </VStack>
  )
}
