import { Text, VStack } from '@chakra-ui/react'

import Card from '~components/Card'
import SectionContainer from '~components/SectionContainer'
import { openInNewTab } from '~helper'

const ON_GOING_CAMPAIGNS = [
  {
    description: 'Community Development Council',
    title: "CDC Voucher Scheme: Recipient's FAQ",
    url: 'https://vouchers.cdc.gov.sg/residents/faq/',
  },
  {
    description: 'Community Development Council',
    title: "CDC Voucher Scheme: Merchants' FAQ",
    url: 'https://vouchers.cdc.gov.sg/merchants/faq/',
  },
  {
    description: 'National Environment Agency',
    title: 'NEA Climate Friendly Households Programme FAQ',
    url: 'https://www.climate-friendly-households.gov.sg/cv-faqs/',
  },
] as const

const OnGoingCampaignFAQ = () => {
  return (
    // Require to add width because of the addition VStack outside which changes the flex direction for flex grow!
    <SectionContainer w="100%">
      <VStack
        align="stretch"
        width="100%"
        spacing={{ base: '16px', md: '24px' }}
      >
        <Text textStyle={{ base: 'h4', md: 'h3-semibold' }} color="primary.500">
          For FAQs related to ongoing campaigns, please refer below
        </Text>
        <VStack spacing="16px">
          {ON_GOING_CAMPAIGNS.map(({ description, title, url }) => (
            <Card
              key={title}
              width="100%"
              align="start"
              spacing={0}
              cursor="pointer"
              onClick={() => openInNewTab(url)}
            >
              <Text textStyle="h5" color="content.strong">
                {title}
              </Text>
              <Text textStyle="body-2" color="content.medium">
                {description}
              </Text>
            </Card>
          ))}
        </VStack>
      </VStack>
    </SectionContainer>
  )
}

export default OnGoingCampaignFAQ
