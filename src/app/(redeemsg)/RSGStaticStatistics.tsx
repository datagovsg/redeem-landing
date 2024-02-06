import { Box, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import StaticStatisticHeroImage from '~images/StaticStatisticHero.svg'

const STATIC_STATISTICS = [
  {
    title: 'vouchers claimed',
    description: (
      <HStack textStyle={{ lg: 'h1', base: 'h3-semibold' }} color="primary.500">
        <Text>1.25</Text>
        <Text>M+</Text>
      </HStack>
    ),
  },
  {
    title: 'vouchers spent',
    description: (
      <HStack textStyle={{ lg: 'h1', base: 'h3-semibold' }} color="primary.500">
        <Text>$360</Text>
        <Text>M+</Text>
      </HStack>
    ),
  },
  {
    title: 'merchants onboarded',
    description: (
      <Text textStyle={{ lg: 'h1', base: 'h3-semibold' }} color="primary.500">
        24,293
      </Text>
    ),
  },
  {
    title: 'schemes launched',
    description: (
      <Text textStyle={{ lg: 'h1', base: 'h3-semibold' }} color="primary.500">
        21
      </Text>
    ),
  },
] as const

type RSGStaticStatisticsProps = {
  backgroundColor: string
}

const RSGStaticStatistics = ({ backgroundColor }: RSGStaticStatisticsProps) => {
  return (
    <SectionContainer backgroundColor={backgroundColor} width="100%">
      <VStack
        width="100%"
        maxWidth="1440px"
        padding={{
          lg: '88px 148px 0',
          'md-lg': '64px 88px 0',
          sm: '64px 88px 0',
          base: '40px 24px 0',
        }}
        boxSizing="content-box"
        spacing={{ lg: '72px', base: '40px' }}
      >
        <VStack
          spacing={{ base: '40px', sm: '48px', 'md-lg': '40px', lg: '72px' }}
        >
          <VStack spacing="16px">
            <Box
              maxWidth="716px"
              textAlign={{ 'md-lg': 'center', base: 'start' }}
            >
              <Text
                textStyle={{ lg: 'h1', sm: 'h2', base: 'h3-semibold' }}
                color="neutral.900"
              >
                Millions of vouchers, supporting Singaporeans everyday
              </Text>
            </Box>
            <Text textStyle="body-1" color="neutral.700">
              Supporting Singapore on it&apos;s journey towards a fair and
              progressive fiscal system. Powered by thoughtful digitalisation.
            </Text>
          </VStack>
          <Grid
            gridGap={{ lg: '88px', base: '40px' }}
            gridTemplateColumns={{
              'md-lg': '1fr 1fr 1fr 1fr',
              base: '1fr 1fr',
            }}
            width="100%"
          >
            {STATIC_STATISTICS.map(({ title, description }) => (
              <GridItem key={title}>
                <VStack textAlign="center" spacing={{ lg: '8px' }}>
                  {description}
                  <Text
                    textStyle={{ sm: 'subhead-1', base: 'subhead-2' }}
                    color="neutral.700"
                  >
                    {title}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
        {/* Attempt fix to prevent extra pixels by next/image at times: https://github.com/vercel/next.js/issues/18911 */}
        <Box width="100%" fontSize={0} letterSpacing={0}>
          <Image
            src={StaticStatisticHeroImage}
            alt="statistics hero image"
            width="100%"
          />
        </Box>
      </VStack>
    </SectionContainer>
  )
}

export default RSGStaticStatistics
