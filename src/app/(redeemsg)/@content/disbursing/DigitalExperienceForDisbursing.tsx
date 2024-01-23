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
    badgeText: 'Scheme organiser benefits',
    title: 'Easy tracking and financial reconciliation',
    description:
      'View campaign transactions in real-time, and download reports for financial reconcillation.',
  },
  {
    imgSrc: DigitalMerchantBenefitsImage,
    badgeText: 'Merchant benefits',
    title: 'Automated next day payouts to merchants',
    description:
      'Better cashflow for local, small-scale merchants with daily automated payouts.',
  },
  {
    imgSrc: DigitalRecipientBenefitsImage,
    badgeText: 'Recipient benefits',
    title: 'Designed to be quick, easy and usable for all',
    description:
      'Easy claiming of vouchers, with a single unique link. Paper vouchers available for the less tech-savvy or aged.',
  },
] as const

const DigitalExperienceForDisbursing = () => {
  return (
    <SectionContainer>
      <VStack
        maxWidth="1440px"
        padding={{
          lg: '0 88px 148px',
          md: '0 128px 80px',
          sm: '0 88px 64px',
          base: '0 24px 40px',
        }}
        boxSizing="content-box"
        spacing={{ md: '64px', sm: '40px', base: '32px' }}
      >
        <Box maxWidth="716px" textAlign={{ base: 'start', md: 'center' }}>
          <Text
            textStyle={{ md: 'h1', sm: 'h2', base: 'h3-semibold' }}
            color="neutral.900"
          >
            We&apos;ve made digital vouchers a better experience for all
          </Text>
        </Box>
        <Grid
          gridGap={{ md: '72px', sm: '40px', base: '32px' }}
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
                  textStyle={{ base: 'body-1', md: 'body-2', lg: 'body-1' }}
                  marginTop={{ md: '16px', base: '8px' }}
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
