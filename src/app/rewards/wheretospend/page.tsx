'use client'

import { Divider } from '@chakra-ui/react'

import DecalInformation from './DecalInformation'
import ListOfSupermarkets from './ListOfSupermarkets'
import WhereToSpendRSGRewards from './WhereToSpendRSGRewards'

const Page = () => {
  return (
    <>
      <WhereToSpendRSGRewards />
      <ListOfSupermarkets />
      <Divider
        width={{
          base: 'calc(100% - (2 * 24px))',
          md: 'calc(100% - (2 * 128px))',
          lg: 'calc(100% - (2 * 148px))',
        }}
        height="1px"
        margin="0 auto"
        background="primary.200"
      />
      <DecalInformation />
    </>
  )
}

export default Page
