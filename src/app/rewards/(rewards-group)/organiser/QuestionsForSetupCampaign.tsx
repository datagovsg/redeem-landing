import { Flex } from '@chakra-ui/react'

import FAQWithHeaderAndListOfQuestionsAndAnswers from '~/app/faq/(components)/FAQWithHeaderAndListOfQuestionsAndAnswers'
import SimpleAnswerContainer from '~/app/faq/(components)/SimpleAnswerContainer'

import { Image } from '~components/Image'
import { InternalLink } from '~components/InternalLink'
import SectionContainer from '~components/SectionContainer'
import {
  RSG_CDC_CAMPAIGN_ORGANISER_FORM,
  RSG_REWARDS_WHERE_TO_SPEND,
} from '~constants/links'
import { FAQ } from '~constants/links'
import QuestionImage from '~images/Question.svg'

export const SetUpCampaignQuestions = [
  {
    sectionTitle: 'Here are some commonly asked questions:',
    questionsAndAnswerResponses: [
      {
        questionTitle: 'Which are the participating supermarket chains?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              {
                beforeLinkText: 'Please refer to this list of ',
                linkText: 'participating supermarkets ↪',
                href: RSG_REWARDS_WHERE_TO_SPEND,
              },
            ]}
          />
        ),
      },
      {
        questionTitle: 'Can I select my own merchants?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              'You are unable to select your own set of merchants with RedeemSG Rewards.',
              {
                beforeLinkText: 'To select your own set of merchants, please ',
                afterLinkText: ' to share your use case.',
                linkText: 'reach out to us',
                href: RSG_CDC_CAMPAIGN_ORGANISER_FORM,
              },
            ]}
          />
        ),
      },
      {
        questionTitle:
          "What's the difference between RedeemSG Rewards, and other campaigns in Redeem?",
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              'RedeemSG Rewards is ideal for campaigns without a preference for specific merchant types. These can be suitable for initiatives focused on providing incentives or rewards to recipients.',
              {
                beforeLinkText:
                  "For other campaign types, you are able to tailor your campaign to specific goals, by ensuring the expenditure of vouchers towards specific merchants. You can also select the voucher validity period, and amount. Please note that you'll have to onboard and manage merchants out of our system. To find out more, ",
                linkText: 'reach out to us ↪',
                href: RSG_CDC_CAMPAIGN_ORGANISER_FORM,
              },
            ]}
          />
        ),
      },
    ],
  },
] as const

const QuestionsForSetupCampaign = () => {
  return (
    <SectionContainer background="primary.100">
      <Flex
        alignItems={{ base: 'center', md: 'flex-start' }}
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        // TO confirm
        flexGrow={1}
        gap={{ base: '40px', md: 'auto', lg: 'auto' }}
        padding={{ base: '40px 24px', md: '88px 128px', lg: '88px 148px' }}
      >
        <Flex
          alignItems="start"
          flexDirection="column"
          flex={1}
          gap={{ base: '24px', md: '32px', lg: '40px' }}
        >
          <FAQWithHeaderAndListOfQuestionsAndAnswers
            header="Have a question?"
            sectionTitleAndQuestionAndAnswers={SetUpCampaignQuestions}
            headerTextColor="secondary.700"
            sectionTitleColor="secondary.500"
            questionTitleColor="secondary.500"
            answerTextColor="secondary.500"
          />
          <InternalLink href={FAQ} textStyle="subhead-1" color="primary.500">
            View more FAQs
          </InternalLink>
        </Flex>
        <Image
          src={QuestionImage}
          alt="Have a question?"
          maxWidth={{ base: '280px', md: '340px', lg: '380px' }}
        />
      </Flex>
    </SectionContainer>
  )
}

export default QuestionsForSetupCampaign
