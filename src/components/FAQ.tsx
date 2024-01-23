import { Button, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import ResidentFAQImage from '~images/ResidentFAQ.svg'

type FAQProps = {
  headerText: string
  bodyText: string
  buttonText: string
  buttonURL: string
}

const FAQ = ({ headerText, bodyText, buttonText, buttonURL }: FAQProps) => {
  const router = useRouter()

  return (
    <SectionContainer background="primary.500">
      <VStack
        alignItems="center"
        padding={{ base: '56px 24px', lg: '88px 148px' }}
        textAlign="center"
        spacing="32px"
      >
        <Image src={ResidentFAQImage} alt="Resident FAQ" />
        <VStack spacing={{ base: '32px', lg: '8px' }}>
          <Text
            textStyle={{ base: 'responsive-heading.heavy', md: 'h2', lg: 'h1' }}
            color="white"
          >
            {headerText}
          </Text>
          <Text
            textStyle={{ lg: 'body-1', md: 'body-2', base: 'body-1' }}
            color="white"
          >
            {bodyText}
          </Text>
        </VStack>
        <Button
          colorScheme="outline-white"
          onClick={() => router.push(buttonURL)}
          variant="outline"
        >
          {buttonText}
        </Button>
      </VStack>
    </SectionContainer>
  )
}

export default FAQ
