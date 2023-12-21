import { Box, HStack } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

import { InternalLink } from './InternalLink'

type TabProps = {
  href: string
  label: string
}

type CustomNavigationTabsProps = {
  tabs: Readonly<TabProps[]>
}

const PADDING = 8

const CustomNavigationTabs = ({ tabs }: CustomNavigationTabsProps) => {
  const pathname = usePathname()
  if (tabs.length === 0) {
    return <Box />
  }

  const selectedIndex = tabs.findIndex((tab) => tab.href === pathname) ?? 0

  return (
    <HStack
      position="relative"
      height={{ base: '76px', md: '64px', lg: '72px' }}
      padding={`${PADDING}px`}
      background="primary.200"
      borderRadius={{ base: '8px', md: '8px', lg: '16px' }}
      spacing={0}
    >
      {tabs.map(({ label, href }) => {
        const isSelected = href === pathname

        return (
          <InternalLink
            key={label}
            zIndex={1}
            href={href}
            color={isSelected ? 'white' : 'primary.600'}
            transition="color 0.2s linear"
            width="100%"
            height="100%"
            textAlign="center"
            textStyle={{ base: 'subhead-2', lg: 'h6' }}
            letterSpacing="-0.006em"
            verticalAlign="middle"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {label}
          </InternalLink>
        )
      })}
      <Box
        position="absolute"
        zIndex={0}
        bottom={`${PADDING}px`}
        left={`calc(${PADDING}px + ${selectedIndex} * calc(100% - ${
          2 * PADDING
        }px) / ${tabs.length})`}
        width={`calc((100% - ${2 * PADDING}px) / ${tabs.length})`}
        height={`calc(100% - ${2 * PADDING}px)`}
        background="primary.500"
        borderRadius={{ base: '4px', md: '8px', lg: '12px' }}
        transition="left 0.2s linear"
      />
    </HStack>
  )
}

export default CustomNavigationTabs
