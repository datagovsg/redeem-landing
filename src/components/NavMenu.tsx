import { HStack } from '@chakra-ui/react'
import { Image } from '~components/Image'

import RedeemLogoWithTextImage from '~images/RedeemLogoWithText.svg'
import RedeemLogoImage from '~images/RedeemLogo.svg'
import { InternalNavMenuLink } from './NavMenuInternalLink'
import { Link as ExternalNavMenuLink } from '@chakra-ui/react'
import { useIsMobile } from '@opengovsg/design-system-react'

const NAV_LINKS = [
  { label: 'Home', href: '/', isExternal: false },
  { label: 'FAQ', href: 'faq', isExternal: false },
  {
    label: 'Contact Us',
    href: 'mailto:feedback@redeem.gov.sg',
    isExternal: true,
  },
] as const

const NavMenu = () => {
  const isMobile = useIsMobile()

  return (
    <HStack
      justify="space-between"
      height={{ md: '104px', base: '64px' }}
      padding={{ md: '36px 148px', base: '10px 24px' }}
      background="primary.200"
    >
      <Image
        src={isMobile ? RedeemLogoImage : RedeemLogoWithTextImage}
        alt="RedeemSG"
        height={{ md: '32px', base: '34px' }}
        width={{ md: '168px', base: '26px' }}
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
