'use client'

import { HStack } from '@chakra-ui/react'
import { Link as ExternalNavMenuLink, useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import { InternalNavMenuLink } from './NavMenuInternalLink'

import { Image } from '~components/Image'
import { FAQ, ROOT } from '~constants/links'
import { breakpoints } from '~theme/theme'

const NAV_LINKS = [
  { href: ROOT, isExternal: false, label: 'Home' },
  { href: FAQ, isExternal: false, label: 'FAQ' },
  {
    href: 'mailto:feedback@redeem.gov.sg',
    isExternal: true,
    label: 'Contact Us',
  },
] as const

type NavMenuProps = {
  mobileLogo: string
  desktopLogo: string
  backgroundColor: string
  textColor: string
}

const NavMenu = ({
  mobileLogo,
  desktopLogo,
  backgroundColor,
  textColor,
}: NavMenuProps) => {
  const router = useRouter()
  const [isLargerThanMobile] = useMediaQuery(`(min-width: ${breakpoints.ssmd})`)
  const isShowMobileLogo = !isLargerThanMobile

  return (
    <HStack
      justify="space-between"
      height={{ base: '64px', md: '72px', lg: '104px' }}
      padding={{ base: '10px 24px', md: '24px 80px', lg: '36px 148px' }}
      background={backgroundColor}
    >
      <Image
        cursor="pointer"
        onClick={() => router.push(ROOT)}
        src={isShowMobileLogo ? mobileLogo : desktopLogo}
        alt="RedeemSG"
        height={{ base: '34px', ssmd: '18px', md: '24px', lg: '32px' }}
        width={{ base: '26px', ssmd: '96px', md: '126px', lg: '168px' }}
      />
      <HStack spacing={{ base: '24px', md: '40px', lg: '40px' }}>
        {NAV_LINKS.map((linkProps) =>
          linkProps.isExternal ? (
            <ExternalNavMenuLink
              {...linkProps}
              key={linkProps.label}
              textStyle={{ base: 'subhead-2', md: 'subhead-1' }}
              width="fit-content"
              color={textColor}
              _hover={{
                textDecoration: 'underline',
              }}
              variant="standalone"
            >
              {linkProps.label}
            </ExternalNavMenuLink>
          ) : (
            <InternalNavMenuLink
              {...linkProps}
              key={linkProps.label}
              textColor={textColor}
            />
          ),
        )}
      </HStack>
    </HStack>
  )
}

export default NavMenu
