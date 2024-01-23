import { Box, HStack, StackProps } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

import { InternalLink } from './InternalLink'

type TabProps = {
  href: string
  label: string
}

type CustomNavigationTabsProps = {
  tabs: Readonly<TabProps[]>
  height: StackProps['height']
  renderText?: (label: string) => React.ReactNode
}

const PADDING = 8

const CustomNavigationTabs = ({
  tabs,
  height,
  renderText = (label) => label,
}: CustomNavigationTabsProps) => {
  const pathname = usePathname()
  if (tabs.length === 0) {
    return <Box />
  }

  const selectedIndex = tabs.findIndex((tab) => tab.href === pathname) ?? 0

  return (
    <HStack
      position="relative"
      maxWidth="1440px"
      height={height}
      margin="0 auto"
      padding={`${PADDING}px`}
      background="primary.200"
      border="1px solid"
      borderColor="white"
      borderRadius={{ base: '8px', md: '8px', lg: '16px' }}
      boxSizing="border-box"
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
            {renderText(label)}
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
