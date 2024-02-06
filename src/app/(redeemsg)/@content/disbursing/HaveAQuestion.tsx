import { Button, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { BiRightArrowAlt } from 'react-icons/bi'

import SectionContainer from '~components/SectionContainer'
import { FAQ } from '~constants/links'

const HaveAQuestion = () => {
  const router = useRouter()

  return (
    <SectionContainer backgroundColor="primary.100" width="100%">
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', 'md-lg': 'row', lg: 'row' }}
        gap={{ base: '24px' }}
        width="100%"
        padding={{ base: '40px 24px', 'md-lg': '88px 128px', lg: '88px 148px' }}
      >
        <Text
          textStyle={{ base: 'h3-semibold', 'md-lg': 'h2', lg: 'h1' }}
          color="neutral.900"
        >
          Have a question?
        </Text>
        <Button
          maxWidth="160px"
          colorScheme="primary"
          onClick={() => router.push(FAQ)}
          rightIcon={<BiRightArrowAlt />}
          variant="outline"
        >
          Explore FAQs
        </Button>
      </Flex>
    </SectionContainer>
  )
}

export default HaveAQuestion
