import { HStack, Link } from '~components/chakra'
import { Image } from '~components/Image'

import RedeemLogoWithText from '~images/RedeemLogoWithText.svg'

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
  return (
    <HStack
      justify="space-between"
      height="104px"
      padding="36px 148px"
      background="primary.200"
    >
      <Image src={RedeemLogoWithText} alt="RedeemSG" height="32px" />
      <HStack spacing="40px">
        {NAV_LINKS.map(({ label, href, isExternal }) => (
          <Link
            key={label}
            color={'primary.700'}
            textStyle="subhead-1"
            w="fit-content"
            variant="standalone"
            href={href}
            _hover={{
              textDecoration: 'underline',
            }}
            isExternal={isExternal}
          >
            {label}
          </Link>
        ))}
      </HStack>
    </HStack>
  )
}

export default NavMenu
