import { Button, Text, VStack } from '@chakra-ui/react'
import { useIsMobile } from '@opengovsg/design-system-react'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import ResidentFAQImage from '~images/ResidentFAQ.svg'

const ResidentFAQ = () => {
  const isMobile = useIsMobile()
  const faqPromptTextWithBreaklines = isMobile
    ? 'If you have more questions, please read\n our full FAQ, or contact the agency that\n issued your vouchers.'
    : 'If you have more questions, please read our full FAQ,\n or contact the agency that issued your vouchers.'

  return (
    <SectionContainer background="primary.500">
      <VStack
        alignItems="center"
        padding={{ base: '56px 24px', md: '88px 148px' }}
        textAlign="center"
        spacing="32px"
      >
        <Image src={ResidentFAQImage} alt="Resident FAQ" />
        <VStack spacing={{ base: '32px', md: '8px' }}>
          <Text
            textStyle={{ base: 'display-2-mobile', md: 'h1' }}
            color="white"
          >
            Frequently asked questions
          </Text>
          {/* Have to do manual break for both mobile and desktop because 
              desktop already have the manual break of \n, which implicates 
              that the mobile also have to do it
          */}
          <Text textStyle="body-1" color="white" whiteSpace="pre-line">
            {faqPromptTextWithBreaklines}
          </Text>
        </VStack>
        <Button variant="outline">Explore FAQ</Button>
      </VStack>
    </SectionContainer>
  )
}

export default ResidentFAQ
