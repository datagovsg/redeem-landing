import { HStack, Box, Flex, Text } from '@chakra-ui/react'

import { usePathname } from 'next/navigation'
import { InternalLink } from './InternalLink'

type TabProps = {
  label: string
  href: string
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
      height="72px"
      padding={`${PADDING}px`}
      background="primary.200"
      borderRadius={{ md: '16px', base: '8px' }}
      spacing={0}
    >
      {tabs.map(({ label, href }, i) => {
        const isSelected = href === pathname

        return (
          <Flex key={label} flex={1}>
            <InternalLink
              zIndex={1}
              href={href}
              color={isSelected ? 'white' : 'primary.600'}
              transition="color 0.2s linear"
              width="100%"
              textAlign="center"
            >
              <Text
                textStyle={{ md: 'h6', base: 'subhead-2' }}
                letterSpacing="-0.006em"
              >
                {label}
              </Text>
            </InternalLink>
          </Flex>
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
        borderRadius={{ md: '12px', base: '4px' }}
        transition="left 0.2s linear"
      />
    </HStack>
  )
}

export default CustomNavigationTabs
