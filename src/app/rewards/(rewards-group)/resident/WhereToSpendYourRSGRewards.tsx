import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import WhereToSpendYourRSGRewardsImage from '~images/WhereToSpendYourRSGRewards.svg'

const WhereToSpendYourRSGRewards = () => {
  return (
    <SectionContainer background="primary.100">
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        gap={{ base: '40px', md: '132px' }}
        padding={{ base: '40px 24px', md: '88px 148px' }}
      >
        <Box>
          <Image
            src={WhereToSpendYourRSGRewardsImage}
            alt="Where to spend your RedeemSG Rewards"
          />
        </Box>
        <VStack align="start" spacing="24px">
          <VStack align="start" spacing={{ base: '24px', md: '16px' }}>
            <Text
              textStyle={{ base: 'h3-semibold', md: 'h1' }}
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
