import { Center, Text, VStack } from '@chakra-ui/react'

import { markdownLikeRender } from '../helper'
import LegalText from '../LegalText'

import { SCHEDULE, TERM_OF_USE } from './constants'

const TermOfUse = () => {
  return (
    <Center>
      <VStack
        align="start"
        width="100%"
        maxWidth="880px"
        padding={{ base: '24px', lg: '40px' }}
      >
        {markdownLikeRender(TERM_OF_USE)}
        <LegalText
          margin={{ base: '20px auto', lg: '48px auto' }}
          textAlign="center"
        >
          These Terms of Use are dated 29 Aug 2023.
        </LegalText>
        <Text
          textStyle="h5"
          margin="0 auto"
          marginBottom={{ lg: '20px', base: '10px' }}
          color="black"
        >
          SCHEDULE
        </Text>
        {markdownLikeRender(SCHEDULE)}
      </VStack>
    </Center>
  )
}

export default TermOfUse
