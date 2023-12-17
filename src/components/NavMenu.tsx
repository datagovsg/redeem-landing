import { HStack } from '@chakra-ui/react'
import { Link as ExternalNavMenuLink } from '@chakra-ui/react'
import { useIsMobile } from '@opengovsg/design-system-react'

import { InternalNavMenuLink } from './NavMenuInternalLink'

import { Image } from '~components/Image'
import { FAQ, ROOT } from '~constants/links'

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
  const isMobile = useIsMobile()

  return (
    <HStack
      justify="space-between"
      height={{ base: '64px', md: '104px' }}
      padding={{ base: '10px 24px', md: '36px 148px' }}
      background={backgroundColor}
    >
      <Image
        src={isMobile ? mobileLogo : desktopLogo}
        alt="RedeemSG"
        height={{ base: '34px', md: '32px' }}
        width={{ base: '26px', md: '168px' }}
      />
      <HStack spacing={{ base: '24px', md: '40px' }}>
        {NAV_LINKS.map((linkProps) =>
          linkProps.isExternal ? (
            <ExternalNavMenuLink
              {...linkProps}
              key={linkProps.label}
              textStyle="subhead-1"
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
