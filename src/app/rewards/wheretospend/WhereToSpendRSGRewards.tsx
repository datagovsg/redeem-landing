import { Text, VStack } from '@chakra-ui/react'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import SupermarketImage from '~images/Supermarket.svg'

const WhereToSpendRSGRewards = () => {
  return (
    <SectionContainer background="primary.100">
      <VStack
        padding={{ base: '50px 24px', md: '88px 128px', lg: '80px 148px' }}
        spacing={{ base: '32px', md: '32px', lg: '48px' }}
      >
        <Text
          textStyle={{
            base: 'h1',
            md: 'responsive-display.heavy-480',
            lg: 'display-1',
          }}
          color="neutral.900"
          textAlign="center"
          whiteSpace="pre-wrap"
        >
          Where to spend your RedeemSG Rewards
        </Text>
        <Image
          src={SupermarketImage}
          alt="Where to spend your RedeemSG Rewards"
          width={{
            base: '280px',
            ssmd: '278px',
            md: '232px',
            lg: '302px',
            xl: '476px',
          }}
        />
      </VStack>
    </SectionContainer>
  )
}

export default WhereToSpendRSGRewards
