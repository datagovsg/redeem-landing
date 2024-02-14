import { Center, Text, VStack } from '@chakra-ui/react'

import { markdownLikeRender } from '../../helper'
import LegalText from '../../LegalText'

import { ANNEX, PRIVACY } from './constants'

const PrivacyCondition = () => {
  return (
    <Center>
      <VStack
        align="start"
        width="100%"
        maxWidth="880px"
        padding={{ base: '24px', lg: '40px' }}
      >
        {markdownLikeRender(PRIVACY)}
        <LegalText
          margin={{ base: '20px auto', lg: '48px auto' }}
          textAlign="center"
        >
          This version of the Privacy Statement is dated 29 August 2023.
        </LegalText>

        <Text
          textStyle="h5"
          margin="0 auto"
          marginBottom={{ lg: '20px', base: '10px' }}
          color="black"
        >
          ANNEX
        </Text>
        {markdownLikeRender(ANNEX)}
      </VStack>
    </Center>
  )
}

export default PrivacyCondition
