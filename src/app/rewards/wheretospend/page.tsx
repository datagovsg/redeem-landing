'use client'

import { Divider } from '@chakra-ui/react'
import ListOfSupermarkets from './ListOfSupermarkets'
import WhereToSpendRSGRewards from './WhereToSpendRSGRewards'
import DecalInformation from './DecalInformation'

const Page = () => {
  return (
    <>
      <WhereToSpendRSGRewards />
      <ListOfSupermarkets />
      <Divider
        width={{
          md: 'calc(100% - (2 * 148px))',
          base: 'calc(100% - (2 * 24px))',
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
