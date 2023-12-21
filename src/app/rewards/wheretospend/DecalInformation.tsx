import { Text, VStack } from '@chakra-ui/react'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import WTSDecalImage from '~images/WTSDecal.svg'

const DecalInformation = () => {
  return (
    <SectionContainer padding={{ base: '40px 24px', lg: '88px 148px' }}>
      <VStack spacing={{ base: '40px', lg: '48px' }}>
        <VStack textAlign="center" spacing={{ base: '24px', lg: '16px' }}>
          <Text textStyle={{ base: 'h3-semibold', lg: 'h1' }}>
            Look out for this decal at the cashier counter
          </Text>
          <Text textStyle="body-1" color="neutral.700">
            If you&apos;re still unsure, all participating supermarkets will
            have this decal displayed at counters.
          </Text>
        </VStack>
        <Image src={WTSDecalImage} alt="Where to spend decal" />
      </VStack>
    </SectionContainer>
  )
}

export default DecalInformation
