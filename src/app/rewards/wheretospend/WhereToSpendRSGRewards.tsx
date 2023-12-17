import { VStack, Text } from '@chakra-ui/react'
import SectionContainer from '~components/SectionContainer'

import { Image } from '~components/Image'

import SupermarketImage from '~images/Supermarket.svg'
import { useIsMobile } from '@opengovsg/design-system-react'

const WhereToSpendRSGRewards = () => {
  const isMobile = useIsMobile()
  const primaryTextWithBreaklines = isMobile
    ? 'Where to spend\n your RedeemSG\n Rewards'
    : 'Where to spend your\n RedeemSG Rewards'

  return (
    <SectionContainer background="primary.100">
      <VStack
        padding={{ md: '80px 148px', base: '50px 24px' }}
        spacing={{ md: '48px', base: '32px' }}
      >
        <Text
          textStyle={{ md: 'display-1', base: 'h1' }}
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
