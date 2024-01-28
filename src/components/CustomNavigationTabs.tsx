import { Link } from '@chakra-ui/next-js'
import {
  Box,
  BoxProps,
  HStack,
  StackProps,
  useBreakpointValue,
} from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

type TabProps = {
  href: string
  label: string
}

type CustomNavigationTabsProps = {
  tabs: Readonly<TabProps[]>
  height: StackProps['height']
  renderText?: (label: string) => React.ReactNode
  borderRadius: BoxProps['borderRadius']
  paddingObject: {
    base: number
    smd: number
  }
}

const CustomNavigationTabs = ({
  tabs,
  height,
  renderText = (label) => label,
  borderRadius,
  paddingObject,
}: CustomNavigationTabsProps) => {
  const pathname = usePathname()
  const padding =
    useBreakpointValue(
      { base: paddingObject.base, smd: paddingObject.smd },
      { ssr: true, fallback: 'smd' },
    ) ?? 8 // defaults to 8px

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
      padding={`${padding}px`}
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
          <Link
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
            textDecoration="none"
            _hover={{
              textDecoration: 'none',
            }}
            scroll={false}
          >
            {renderText(label)}
          </Link>
        )
      })}
      <Box
        position="absolute"
        zIndex={0}
        bottom={`${padding}px`}
        left={`calc(${padding}px + ${selectedIndex} * calc(100% - ${
          2 * padding
        }px) / ${tabs.length})`}
        width={`calc((100% - ${2 * padding}px) / ${tabs.length})`}
        height={`calc(100% - ${2 * padding}px)`}
        background="primary.500"
        borderRadius={borderRadius}
        transition="left 0.2s linear"
      />
    </HStack>
  )
}

export default CustomNavigationTabs
