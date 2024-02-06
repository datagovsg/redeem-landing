import { Link } from '@chakra-ui/next-js'
import { Flex } from '@chakra-ui/react'

import FAQWithHeaderAndListOfQuestionsAndAnswers from '~/app/faq/(components)/FAQWithHeaderAndListOfQuestionsAndAnswers'
import SimpleAnswerContainer from '~/app/faq/(components)/SimpleAnswerContainer'

import { Image } from '~components/Image'
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
        flexGrow={1}
        gap={{ base: '40px', md: '68px', lg: '34px', xl: '134px' }}
        maxWidth="1440px"
        padding={{
          base: '40px 24px',
          md: '88px',
          lg: '88px 128px',
          xl: '88px 148px',
        }}
        boxSizing="content-box"
      >
        <Flex
          alignItems="start"
          flexDirection="column"
          flex={1}
          gap={{ base: '24px', md: '32px', lg: '32px', xl: '40px' }}
        >
          <FAQWithHeaderAndListOfQuestionsAndAnswers
            header="Have a question?"
            sectionTitleAndQuestionAndAnswers={SetUpCampaignQuestions}
            headerTextColor="secondary.700"
            sectionTitleColor="secondary.500"
            questionTitleColor="secondary.500"
            answerTextColor="secondary.500"
            headerTextStyle={{
              base: 'h3-semibold',
              md: 'h3-semibold',
              lg: 'h2',
              xl: 'h1',
            }}
            sectionTitleTextStyle={{
              base: 'body-1',
              md: 'body-2',
              lg: 'body-1',
              xl: 'body-1',
            }}
            questionTextStyle="subhead-1"
            answerTextStyle={{
              base: 'text-editor-link-small',
              md: 'text-editor-link-small',
              lg: 'body-2',
              xl: 'body-2',
            }}
          />
          <Link
            href={FAQ}
            _hover={{
              color: 'primary.600',
            }}
            textStyle="subhead-1"
            color="primary.500"
            textDecoration="none"
          >
            View more FAQs
          </Link>
        </Flex>
        <Image
          src={QuestionImage}
          alt="Have a question?"
          maxWidth={{ base: '280px', md: '232px', lg: '340px', xl: '380px' }}
        />
      </Flex>
    </SectionContainer>
  )
}

export default QuestionsForSetupCampaign
