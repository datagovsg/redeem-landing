import { Flex, Text } from '@chakra-ui/react'
import { RestrictedFooter } from '@opengovsg/design-system-react'

import { Image } from '~components/Image'
import { FAQ } from '~constants/links'
import RedeemLogoWithText from '~images/RedeemLogoWithText.svg'

const AppName = () => {
  return (
    <Flex
      alignItems="flex-start"
      flexDirection={{ base: 'column', md: 'row' }}
      gap={{ base: '8px', md: '16px' }}
    >
      <Image
        width="127px"
        src={RedeemLogoWithText}
        alt="RedeemSG"
        height="24px"
      />
      <Text as="span" textStyle="body-2" color="primary.500">
        Trusted voucher system of the Singapore Government
      </Text>
    </Flex>
  )
}

const AppFooter = () => {
  return (
    <RestrictedFooter
      appName={<AppName />}
      appLink="/"
      footerLinks={[
        {
          href: FAQ,
          label: 'FAQ',
        },
        {
          href: '/privacy',
          label: 'Privacy',
        },
        {
          href: '/terms',
          label: 'Terms of Use',
        },
        {
          href: 'https://www.tech.gov.sg/report_vulnerability',
          label: 'Report Vulnerability',
        },
      ]}
    />
  )
}

export default AppFooter
