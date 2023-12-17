import { VStack, Box, Text, Button, Flex } from '@chakra-ui/react'
import { Image } from '~components/Image'
import { BiRightArrowAlt } from 'react-icons/bi'
import WhereToSpendYourRSGRewardsImage from '~images/WhereToSpendYourRSGRewards.svg'
import SectionContainer from '~components/SectionContainer'

const WhereToSpendYourRSGRewards = () => {
  return (
    <SectionContainer background="primary.100">
      <Flex
        flexDirection={{ md: 'row', base: 'column-reverse' }}
        gap={{ md: '132px', base: '40px' }}
        padding={{ md: '88px 148px', base: '40px 24px' }}
      >
        <Box>
          <Image
            src={WhereToSpendYourRSGRewardsImage}
            alt="Where to spend your RedeemSG Rewards"
          />
        </Box>
        <VStack align="start" spacing="24px">
          <VStack align="start" spacing={{ md: '16px', base: '24px' }}>
            <Text
              textStyle={{ md: 'h1', base: 'h3-semibold' }}
              color="neutral.900"
            >
              Where to spend your RedeemSG Rewards
            </Text>
            <Text textStyle="body-1" color="neutral.700">
              Unsure where you can spend your vouchers? Look for decals at the
              cashier, or view our list of participating chains:
            </Text>
          </VStack>
          <Button rightIcon={<BiRightArrowAlt />}>
            Find a supermarket near you
          </Button>
        </VStack>
      </Flex>
    </SectionContainer>
  )
}

export default WhereToSpendYourRSGRewards
