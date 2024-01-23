import { Flex, Text, VStack } from '@chakra-ui/react'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import FAQHeroImage from '~images/FAQHero.svg'

const FAQHeader = () => {
  return (
    <SectionContainer backgroundColor="primary.200">
      <Flex
        alignItems="center"
        justifyContent={{ base: 'initial', md: 'space-between' }}
        flexDirection={{ base: 'column', md: 'row' }}
        flexGrow={1}
        gap={{ base: '24px', md: '0px' }}
        padding={{ base: '32px 24px 40px', sm: '44px 80px', lg: '44px 264px' }}
      >
        <VStack align="start" spacing="16px">
          <Text textStyle="display-2" color="primary.700">
            Frequently Asked Questions
          </Text>
          <Text textStyle="body-1" color="neutral.900">
            For help related to claiming vouchers, payouts, and more.
          </Text>
        </VStack>
        <Image src={FAQHeroImage} alt="Frequently Asked Questions" />
      </Flex>
    </SectionContainer>
  )
}

export default FAQHeader
