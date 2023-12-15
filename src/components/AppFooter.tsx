// 'use client'

import { Suspense } from 'react'
import { HStack, Text } from '~components/chakra'
import { RestrictedFooter } from '~components/design-system'

import { Image } from '~components/Image'
import RedeemLogoWithText from '~images/RedeemSGRewards.svg'
// import { AppName } from './AppName'
import withNoSSR from './WithNoSSR'

const AppName = () => {
  return (
    <HStack spacing="16px">
      <Image src={RedeemLogoWithText} alt="RedeemSG" height="24px" />
      <Text textStyle="body-2" color="primary.500" as="span">
        Trusted voucher system of the Singapore Government
      </Text>
    </HStack>
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

export default withNoSSR(AppFooter)
