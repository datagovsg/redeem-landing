import { Box, Grid, GridItem, Text, VStack } from '@chakra-ui/react'

import Badge from '~components/Badge'
import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import DigitalMerchantBenefitsImage from '~images/DigitalMerchantBenefits.svg'
import DigitalRecipientBenefitsImage from '~images/DigitalRecipientBenefits.svg'
import DigitalSchemeOrganiserBenefitsImage from '~images/DigitalSchemeOrganiserBenefits.svg'

const DIGITAL_BENEFITS = [
  {
    imgSrc: DigitalSchemeOrganiserBenefitsImage,
    badgeText: 'Campaign organiser benefits',
    title: 'Easy tracking and financial reconciliation',
    description:
      'Effortlessly track redemptions and reconcile finances using the admin portal or by downloading reports.',
  },
  {
    imgSrc: DigitalMerchantBenefitsImage,
    badgeText: 'Merchant benefits',
    title: 'Next day payouts to merchants',
    description:
      'Support local merchants and their cashflow through automated next-day payouts.',
  },
  {
    imgSrc: DigitalRecipientBenefitsImage,
    badgeText: 'Recipient benefits',
    title: 'Inclusive voucher redemption for all ',
    description:
      'Easily spend vouchers without a mobile app or opt for paper for the less digitally savvy.',
  },
] as const

const DigitalExperienceForDisbursing = () => {
  return (
    <SectionContainer>
      <VStack
        maxWidth="1440px"
        padding={{
          lg: '0 88px 148px',
          'md-lg': '0 128px 80px',
          sm: '0 88px 64px',
          base: '0 24px 40px',
        }}
        boxSizing="content-box"
        spacing={{ 'md-lg': '64px', sm: '40px', base: '32px' }}
      >
        <Box maxWidth="716px" textAlign={{ base: 'start', 'md-lg': 'center' }}>
          <Text
            textStyle={{ 'md-lg': 'h1', sm: 'h2', base: 'h3-semibold' }}
            color="neutral.900"
          >
            We&apos;ve made digital vouchers a better experience for all
          </Text>
        </Box>
        <Grid
          gridGap={{ 'md-lg': '72px', sm: '40px', base: '32px' }}
          gridTemplateColumns={{ md: '1fr 1fr 1fr', base: '1fr' }}
          width="100%"
        >
          {DIGITAL_BENEFITS.map(({ title, badgeText, description, imgSrc }) => (
            <GridItem key={title}>
              <VStack align="start" spacing={0}>
                <Image alt={badgeText} src={imgSrc} />
                <Badge text={badgeText} marginTop="20px" />
                <Text
                  textStyle={{ lg: 'h4', base: 'h5' }}
                  marginTop="16px"
                  color="secondary.700"
                >
                  {title}
                </Text>
                <Text
                  textStyle={{
                    base: 'body-1',
                    'md-lg': 'body-2',
                    lg: 'body-1',
                  }}
                  marginTop={{ 'md-lg': '16px', base: '8px' }}
                  color="neutral.700"
                >
                  {description}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </SectionContainer>
  )
}

export default DigitalExperienceForDisbursing
