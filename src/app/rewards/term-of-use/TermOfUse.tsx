import { Center, VStack } from '@chakra-ui/react'

import { markdownLikeRender } from '../../helper'

import { TERM_OF_USE } from './constants'

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
      </VStack>
    </Center>
  )
}

export default TermOfUse
