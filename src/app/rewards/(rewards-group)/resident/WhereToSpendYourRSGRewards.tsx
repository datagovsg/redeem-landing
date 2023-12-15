import { HStack, VStack, Box, Text, Button, Flex } from '@chakra-ui/react'
import { Image } from '~components/Image'
import { BiRightArrowAlt } from 'react-icons/bi'
import WhereToSpendYourRSGRewardsImage from '~images/WhereToSpendYourRSGRewards.svg'

const WhereToSpendYourRSGRewards = () => {
  return (
    <HStack
      as="main"
      align="stretch"
      flexGrow={1}
      background="primary.100"
      spacing={0}
    >
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
    </HStack>
  )
}

export default WhereToSpendYourRSGRewards
