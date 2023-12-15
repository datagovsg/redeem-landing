import { Box, HStack, VStack, Text, Button } from '@chakra-ui/react'
import ResidentFAQImage from '~images/ResidentFAQ.svg'
import { Image } from '~components/Image'
import { useIsMobile } from '@opengovsg/design-system-react'

const ResidentFAQ = () => {
  const isMobile = useIsMobile()
  const faqPromptTextWithBreaklines = isMobile
    ? 'If you have more questions, please read\n our full FAQ, or contact the agency that\n issued your vouchers.'
    : 'If you have more questions, please read our full FAQ,\n or contact the agency that issued your vouchers.'

  return (
    <VStack
      as="main"
      align="stretch"
      flexGrow={1}
      minHeight="440px"
      background="primary.500"
      spacing={0}
    >
      <VStack
        alignItems="center"
        padding={{ md: '88px 148px', base: '56px 24px' }}
        textAlign="center"
        spacing="32px"
      >
        <Image src={ResidentFAQImage} alt="Resident FAQ" />
        <VStack spacing={{ md: '8px', base: '32px' }}>
          <Text
            textStyle={{ md: 'h1', base: 'display-2-mobile' }}
            color="white"
          >
            Frequently asked questions
          </Text>
          <Text textStyle="body-1" color="white" whiteSpace="pre-line">
            {faqPromptTextWithBreaklines}
          </Text>
        </VStack>
        <Button variant="outline">Explore FAQ</Button>
      </VStack>
    </VStack>
  )
}

export default ResidentFAQ
