import { Center, Text, VStack } from '@chakra-ui/react'

import { markdownLikeRender } from '../../../common/helper'
import LegalText from '../../../common/LegalText'

import { RSG_REWARDS_TERM_OF_USE } from './constants'

const TermOfUse = () => {
  return (
    <Center>
      <VStack
        align="start"
        width="100%"
        maxWidth="880px"
        padding={{ base: '24px', lg: '40px' }}
      >
        <Text
          textStyle={{ base: 'h4', md: 'h3-semibold' }}
          marginBottom={{ lg: '20px', base: '10px' }}
          color="primary.500"
        >
          RedeemSG Rewards
        </Text>
        {markdownLikeRender(RSG_REWARDS_TERM_OF_USE)}
        <LegalText
          margin={{ base: '20px auto', lg: '48px auto' }}
          textAlign="center"
        >
          These Terms of Use are dated 14 February 2024.
        </LegalText>
      </VStack>
    </Center>
  )
}

export default TermOfUse
