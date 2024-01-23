'use client'

import { Box, Divider } from '@chakra-ui/react'

import RSGStaticStatistics from '../../RSGStaticStatistics'

import CTAToSetUpRSG from './CTAToSetUpRSG'
import DigitalExperienceForDisbursing from './DigitalExperienceForDisbursing'
import HaveAQuestion from './HaveAQuestion'
import SelectMerchants from './SelectMerchants'

const Page = () => {
  return (
    <>
      <DigitalExperienceForDisbursing />
      <Divider
        width={{
          base: 'calc(100% - (2 * 24px))',
          md: 'calc(100% - (2 * 128px))',
          lg: 'calc(100% - (2 * 148px))',
        }}
        margin="0 auto"
        borderColor="primary.200"
      />
      <SelectMerchants />
      <RSGStaticStatistics backgroundColor="primary.100" />
      <CTAToSetUpRSG />
      <HaveAQuestion />
      <Box width="100%" background="primary.100">
        <Divider
          width={{
            base: 'calc(100% - (2 * 24px))',
            md: 'calc(100% - (2 * 128px))',
            lg: 'calc(100% - (2 * 148px))',
          }}
          margin="0 auto"
          borderColor="neutral.300"
        />
      </Box>
    </>
  )
}

export default Page
