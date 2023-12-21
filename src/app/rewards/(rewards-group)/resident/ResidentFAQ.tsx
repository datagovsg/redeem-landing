import { Button, Text, VStack } from '@chakra-ui/react'
import { useIsMobile } from '@opengovsg/design-system-react'
import { useRouter } from 'next/navigation'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { FAQ } from '~constants/links'
import ResidentFAQImage from '~images/ResidentFAQ.svg'

const ResidentFAQ = () => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const faqPromptTextWithBreaklines = isMobile
    ? 'If you have more questions, please read\n our full FAQ, or contact the agency that\n issued your vouchers.'
    : 'If you have more questions, please read our full FAQ,\n or contact the agency that issued your vouchers.'

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
            textStyle={{ base: 'display-2-mobile', md: 'h2', lg: 'h1' }}
            color="white"
          >
            Frequently asked questions
          </Text>
          {/* Have to do manual break for both mobile and desktop because 
              desktop already have the manual break of \n, which implicates 
              that the mobile also have to do it
          */}
          <Text
            textStyle={{ lg: 'body-1', md: 'body-2', base: 'body-1' }}
            color="white"
            whiteSpace="pre-line"
          >
            {faqPromptTextWithBreaklines}
          </Text>
        </VStack>
        <Button
          colorScheme="outline-white"
          onClick={() => router.push(FAQ)}
          variant="outline"
        >
          Explore FAQ
        </Button>
      </VStack>
    </SectionContainer>
  )
}

export default ResidentFAQ
