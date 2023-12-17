import FAQWithHeaderAndListOfQuestionsAndAnswers from './(components)/FAQWithHeaderAndListOfQuestionsAndAnswers'
import SimpleAnswerContainer from './(components)/SimpleAnswerContainer'

import SectionContainer from '~components/SectionContainer'
import {
  RSG_CDC_CAMPAIGN_ORGANISER_FORM,
  RSG_CDC_DONATE_FAQ,
  RSG_REWARDS_WHERE_TO_SPEND,
} from '~constants/links'

export const AboutRedeemSGRewardsQuestions = [
  {
    sectionTitle: 'Eligibility and claiming of vouchers',
    questionsAndAnswerResponses: [
      {
        questionTitle: 'Why did I receive RedeemSG Rewards vouchers?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              'RedeemSG Rewards is a government-initiated voucher program designed to benefit both citizens and government agencies. These can be campaigns that are aimed at providing incentives or rewards to their recipients.',
              'Please reach out to your relevant government agency or campaign organiser, for any further questions related to why you have received RedeemSG Rewards vouchers.',
            ]}
          />
        ),
      },
      {
        questionTitle:
          'Am I eligible for RedeemSG Rewards? How do I apply for RedeemSG Rewards?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              'Unlike nationwide campaigns such as CDC Vouchers, RedeemSG Rewards is catered towards smaller, specific campaigns that target a certain group of beneficiaries. For citizens or residents of Singapore, you are unable to apply for RedeemSG Rewards, unless you have been notified by a government agency that you are eligible for a RedeemSG Rewards campaign.',
              'Please reach out to your relevant government agency or campaign organiser, for any further questions related to eligibility and applying for vouchers.',
            ]}
          />
        ),
      },
    ],
  },
  {
    sectionTitle: 'Spending your RedeemSG Rewards vouchers',
    questionsAndAnswerResponses: [
      {
        questionTitle:
          "Can I gift or donate my vouchers, if I don't want to use them?",
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              {
                beforeLinkText:
                  'Unfortunately, we are unable to support donations for RedeemSG Rewards vouchers. Please note that every voucher type has different policies. For instance, please refer to the ',
                afterLinkText: ' for CDC vouchers donation guidelines.',
                linkText: 'CDC FAQ',
                href: RSG_CDC_DONATE_FAQ,
              },
              'However, you can share your vouchers with people you know. once a voucher link has been generated and sent to you, you can choose to share it with anyone whom you allow to spend the vouchers on your behalf. These include friends, or family members. Do note that anyone with the live voucher link will be able to spend the vouchers, at any point of time. Please do not share your voucher link with anyone else that is not meant to use the vouchers.',
            ]}
          />
        ),
      },
      {
        questionTitle:
          'Am I able to use my RedeemSG Rewards vouchers at all supermarkets?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              {
                beforeLinkText: 'Please refer to this ',
                linkText: 'list of participating supermarkets.',
                href: RSG_REWARDS_WHERE_TO_SPEND,
              },
            ]}
          />
        ),
      },
    ],
  },
  {
    sectionTitle:
      'For agency officers or campaign organisers: Setting up your own RedeemSG Rewards campaign',
    questionsAndAnswerResponses: [
      {
        questionTitle: 'How do I issue RedeemSG Rewards?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              {
                beforeLinkText: 'To issue your own RedeemSG Rewards, please ',
                afterLinkText:
                  ". Here is what the process would look like: 1. Reach out to us to share your use case. If suitable, you can set up your own campaign on RedeemSG's admin portal. 2. Set up the campaign on RedeemSG. Decide the voucher amount and validity period. 3. Issue vouchers to recipients. Vouchers can be directly sent to eligible recipients or through an extra verification using Singpass.",
                linkText: 'reach out so us',
                href: RSG_CDC_CAMPAIGN_ORGANISER_FORM,
              },
            ]}
          />
        ),
      },
      {
        questionTitle:
          "What's the difference between RedeemSG Rewards and other campaigns in RedeemSG?",
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              {
                beforeLinkText:
                  'RedeemSG Rewards is ideal for campaigns without a preference for specific merchant types where vouchers can be redeemed. These can be particularly suitable for initiatives focused on providing incentives or rewards to recipients. With RedeemSG Rewards, we offer a selection of onboarded supermarket merchants, streamlining the operations required for agencies to onboard, train, and manage merchants. Simply determine the voucher amount and validity period, then issue the vouchers to eligible recipients. These vouchers can be redeemed at all participating supermarkets.You can view the ',
                linkText: 'list of participating supermarket chains here.',
                href: RSG_REWARDS_WHERE_TO_SPEND,
              },
              {
                beforeLinkText:
                  "For other campaign types, you are able to tailor your campaign to specific goals, by ensuring the expenditure of vouchers towards specific merchants. You can also select the voucher validity period, and amount. Please note that you'll have to onboard and manage merchants out of our system. To find out more, ",
                linkText: 'reach out to us.',
                href: RSG_CDC_CAMPAIGN_ORGANISER_FORM,
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
              {
                beforeLinkText:
                  'You are unable to select your own set of merchants with RedeemSG Rewards. You can view the ',
                afterLinkText: ' for RedeemSG Rewards.',
                linkText: 'list of participating supermarket chains',
                href: RSG_REWARDS_WHERE_TO_SPEND,
              },
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
    ],
  },
] as const

const AboutRedeemSGRewards = () => {
  return (
    <SectionContainer width="100%">
      <FAQWithHeaderAndListOfQuestionsAndAnswers
        header="About RedeemSG Rewards"
        sectionTitleAndQuestionAndAnswers={AboutRedeemSGRewardsQuestions}
      />
    </SectionContainer>
  )
}

export default AboutRedeemSGRewards
