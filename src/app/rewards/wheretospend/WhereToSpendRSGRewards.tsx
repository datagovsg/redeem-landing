import { Text, VStack } from '@chakra-ui/react'
import { useIsMobile } from '@opengovsg/design-system-react'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import SupermarketImage from '~images/Supermarket.svg'

const WhereToSpendRSGRewards = () => {
  const isMobile = useIsMobile()
  const primaryTextWithBreaklines = isMobile
    ? 'Where to spend\n your RedeemSG\n Rewards'
    : 'Where to spend your\n RedeemSG Rewards'

  return (
    <SectionContainer background="primary.100">
      <VStack
        padding={{ base: '50px 24px', lg: '80px 148px' }}
        spacing={{ base: '32px', lg: '48px' }}
      >
        <Text
          textStyle={{ base: 'h1', lg: 'display-1' }}
          color="neutral.900"
          textAlign="center"
          whiteSpace="pre-wrap"
        >
          {primaryTextWithBreaklines}
        </Text>
        <Image
          src={SupermarketImage}
          alt="Where to spend your RedeemSG Rewards"
        />
      </VStack>
    </SectionContainer>
  )
}

export default WhereToSpendRSGRewards
