import { VStack, Text } from '@chakra-ui/react'
import SectionContainer from '~components/SectionContainer'
import { Image } from '~components/Image'

import WTSDecalImage from '~images/WTSDecal.svg'

const DecalInformation = () => {
  return (
    <SectionContainer padding={{ md: '88px 148px', base: '40px 24px' }}>
      <VStack spacing={{ md: '48px', base: '40px' }}>
        <VStack textAlign="center" spacing={{ md: '16px', base: '24px' }}>
          <Text textStyle={{ md: 'h1', base: 'h3-semibold' }}>
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
