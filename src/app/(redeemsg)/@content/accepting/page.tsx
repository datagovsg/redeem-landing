'use client'

import RSGStaticStatistics from '../../RSGStaticStatistics'

import HowToSignUpAsMerchant from './HowToSignUpAsMerchant'

import FAQ from '~components/FAQ'
import { FAQ as FAQLink } from '~constants/links'

const Page = () => {
  return (
    <>
      <HowToSignUpAsMerchant />
      <RSGStaticStatistics backgroundColor="primary.100" />
      <FAQ
        headerText="Frequently Asked Questions"
        bodyText="For help related to how to sign up as a merchant, and more."
        buttonText="Explore FAQ"
        buttonURL={FAQLink}
      />
    </>
  )
}

export default Page
