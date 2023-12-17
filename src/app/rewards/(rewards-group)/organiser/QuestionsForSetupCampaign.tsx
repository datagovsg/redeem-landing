import { Accordion, Flex, Link, Text, VStack } from '@chakra-ui/react'

import { HelpAccordionItem } from '~components/HelpAccordionItem'
import { Image } from '~components/Image'
import { InternalLink } from '~components/InternalLink'
import SectionContainer from '~components/SectionContainer'
import {
  RSG_CAMPAIGN_ORGANISER_FORM,
  RSG_REWARDS_WHERE_TO_SPEND,
} from '~constants/links'
import { FAQ } from '~constants/links'
import QuestionImage from '~images/Question.svg'

const QuestionsForSetupCampaign = () => {
  return (
    <SectionContainer background="primary.100">
      <Flex
        alignItems="flex-start"
        flexDirection={{ base: 'column', md: 'row' }}
        flexGrow={1}
        // TO confirm
        gap={{ base: '40px', md: 'auto' }}
        padding={{ base: '40px 24px', md: '88px 148px' }}
      >
        <VStack align="start" spacing={{ base: '24px', md: '40px' }}>
          <VStack align="start" spacing="16px">
            <Text
              textStyle={{ base: 'h3-semibold', md: 'h1' }}
              color="neutral.900"
            >
              Have a question?
            </Text>
            <Text textStyle="body-1" color="neutral.700">
              Here are some commonly asked questions:
            </Text>
            <Accordion whiteSpace="pre-wrap" allowMultiple variant="medium">
              <HelpAccordionItem title="Which are the participating supermarket chains?">
                <Text textStyle="body-2" color="secondary.500">
                  {'Please refer to this list of '}

                  <Link
                    as="a"
                    textStyle="text-editor-link-small"
                    color="primary.500"
                    href={RSG_REWARDS_WHERE_TO_SPEND}
                    isExternal
                  >
                    participating supermarkets ↪
                  </Link>
                </Text>
              </HelpAccordionItem>
              <HelpAccordionItem title="Can I select my own merchants?">
                <VStack align="start" spacing="30px">
                  <Text textStyle="body-2" color="secondary.500">
                    You are unable to select your own set of merchants with
                    RedeemSG Rewards.
                  </Text>
                  <Text textStyle="body-2" color="secondary.500">
                    {'To select your own set of merchants, please '}
                    <Link
                      as="a"
                      textStyle="text-editor-link-small"
                      color="primary.500"
                      href={RSG_CAMPAIGN_ORGANISER_FORM}
                      isExternal
                    >
                      reach out to us to
                    </Link>
                    {' share your use case.'}
                  </Text>
                </VStack>
              </HelpAccordionItem>
              <HelpAccordionItem title="What's the difference between RedeemSG Rewards, and other campaigns in Redeem?">
                <VStack align="start" spacing="30px">
                  <Text textStyle="body-2" color="secondary.500">
                    RedeemSG Rewards is ideal for campaigns without a preference
                    for specific merchant types. These can be suitable for
                    initiatives focused on providing incentives or rewards to
                    recipients.
                  </Text>
                  <Text textStyle="body-2" color="secondary.500">
                    {
                      "For other campaign types, you are able to tailor your campaign to specific goals, by ensuring the expenditure of vouchers towards specific merchants. You can also select the voucher validity period, and amount. Please note that you'll have to onboard and manage merchants out of our system. To find out more, "
                    }
                    <Link
                      as="a"
                      textStyle="text-editor-link-small"
                      color="primary.500"
                      href={RSG_CAMPAIGN_ORGANISER_FORM}
                      isExternal
                    >
                      reach out to us ↪
                    </Link>
                  </Text>
                </VStack>
              </HelpAccordionItem>
            </Accordion>
          </VStack>
          <InternalLink href={FAQ} textStyle="subhead-1" color="primary.500">
            View more FAQs
          </InternalLink>
        </VStack>
        <Image src={QuestionImage} alt="Have a question?" />
      </Flex>
    </SectionContainer>
  )
}

export default QuestionsForSetupCampaign
