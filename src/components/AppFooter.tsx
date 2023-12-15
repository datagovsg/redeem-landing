import { Flex, Text, Box } from '@chakra-ui/react'
import { RestrictedFooter } from '@opengovsg/design-system-react'

import { Image } from '~components/Image'
import RedeemLogoWithText from '~images/RedeemLogoWithText.svg'

const AppName = () => {
  return (
    <Flex
      alignItems="flex-start"
      flexDirection={{ md: 'row', base: 'column' }}
      gap={{ md: '16px', base: '8px' }}
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
          label: 'FAQ',
          href: '/faq',
        },
        {
          label: 'Privacy',
          href: '/privacy',
        },
        {
          label: 'Terms of Use',
          href: '/terms',
        },
        {
          label: 'Report Vulnerability',
          href: 'https://www.tech.gov.sg/report_vulnerability',
        },
      ]}
    />
  )
}

export default AppFooter
