import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import {
  REWARDS,
  REWARDS_RESIDENT,
  RSG_REWARDS_WHERE_TO_SPEND,
} from '~constants/links'
import { openInNewTab } from '~helper'
import WhereToSpendYourRSGRewardsImage from '~images/WhereToSpendYourRSGRewards.svg'

const WhereToSpendYourRSGRewards = () => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch(REWARDS)
    router.prefetch(REWARDS_RESIDENT)
  }, [router])

  return (
    <SectionContainer background="primary.100">
      <Flex
        alignItems={{ base: 'flex-start', md: 'center' }}
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        gap={{ base: '40px', md: '68px', lg: '72px', xl: '132px' }}
        maxWidth="1440px"
        padding={{
          base: '40px 24px',
          ssmd: '52px 58px',
          md: '88px',
          lg: '88px 128px',
          xl: '88px 148px',
        }}
        boxSizing="content-box"
      >
        <Image
          src={WhereToSpendYourRSGRewardsImage}
          alt="Where to spend your RedeemSG Rewards"
          height="100%"
          width={{ base: '280px', md: '232px', lg: '302px', xl: '560px' }}
        />
        <VStack align="start" spacing="24px">
          <VStack
            align="start"
            spacing={{ base: '24px', md: '16px', lg: '16px' }}
          >
            <Text
              textStyle={{
                base: 'h3-semibold',
                md: 'h3-semibold',
                lg: 'h2',
                xl: 'h1',
              }}
              color="neutral.900"
            >
              Where to spend your RedeemSG Rewards
            </Text>
            <Text
              textStyle={{ lg: 'body-1', md: 'body-2', base: 'body-1' }}
              color="neutral.700"
            >
              Look for the RedeemSG Rewards decal featured prominently at
              participating cashiers, or view our list of participating
              merchants:
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
