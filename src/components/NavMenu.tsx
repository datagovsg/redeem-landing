import { HStack } from '@chakra-ui/react'
import { Link as ExternalNavMenuLink } from '@chakra-ui/react'
import { useIsMobile } from '@opengovsg/design-system-react'

import { InternalNavMenuLink } from './NavMenuInternalLink'

import { Image } from '~components/Image'
import { FAQ, ROOT } from '~constants/links'
import RedeemLogoImage from '~images/RedeemLogo.svg'
import RedeemLogoWithTextImage from '~images/RedeemLogoWithText.svg'

const NAV_LINKS = [
  { href: ROOT, isExternal: false, label: 'Home' },
  { href: FAQ, isExternal: false, label: 'FAQ' },
  {
    href: 'mailto:feedback@redeem.gov.sg',
    isExternal: true,
    label: 'Contact Us',
  },
] as const

const NavMenu = () => {
  const isMobile = useIsMobile()

  return (
    <HStack
      justify="space-between"
      height={{ base: '64px', md: '104px' }}
      padding={{ base: '10px 24px', md: '36px 148px' }}
      background="primary.200"
    >
      <Image
        src={isMobile ? RedeemLogoImage : RedeemLogoWithTextImage}
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
              color="primary.700"
              _hover={{
                textDecoration: 'underline',
              }}
              variant="standalone"
            >
              {linkProps.label}
            </ExternalNavMenuLink>
          ) : (
            <InternalNavMenuLink {...linkProps} key={linkProps.label} />
          ),
        )}
      </HStack>
    </HStack>
  )
}

export default NavMenu
