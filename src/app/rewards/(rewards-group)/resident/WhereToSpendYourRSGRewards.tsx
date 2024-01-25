import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { REWARDS, RSG_REWARDS_WHERE_TO_SPEND } from '~constants/links'
import { openInNewTab } from '~helper'
import WhereToSpendYourRSGRewardsImage from '~images/WhereToSpendYourRSGRewards.svg'

const WhereToSpendYourRSGRewards = () => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch(REWARDS)
  }, [router])

  return (
    <SectionContainer background="primary.100">
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row', lg: 'row' }}
        gap={{ base: '40px', md: '72px', lg: '132px' }}
        maxWidth="1440px"
        padding={{ base: '40px 24px', md: '88px 128px', lg: '88px 148px' }}
        boxSizing="content-box"
      >
        <Box>
          <Image
            src={WhereToSpendYourRSGRewardsImage}
            alt="Where to spend your RedeemSG Rewards"
            height="100%"
          />
        </Box>
        <VStack align="start" spacing="24px">
          <VStack align="start" spacing={{ base: '24px', lg: '16px' }}>
            <Text
              textStyle={{ base: 'h3-semibold', md: 'h2', lg: 'h1' }}
              color="neutral.900"
            >
              Where to spend your RedeemSG Rewards
            </Text>
            <Text
              textStyle={{ lg: 'body-1', md: 'body-2', base: 'body-1' }}
              color="neutral.700"
            >
              Unsure where you can spend your vouchers? Look for decals at the
              cashier, or view our list of participating chains:
            </Text>
          </VStack>
          <Button
            colorScheme="primary"
            onClick={() => openInNewTab(RSG_REWARDS_WHERE_TO_SPEND)}
            rightIcon={<BiRightArrowAlt />}
            variant="solid"
          >
            Find a supermarket near you
          </Button>
        </VStack>
      </Flex>
    </SectionContainer>
  )
}

export default WhereToSpendYourRSGRewards
