import FAQWithHeaderAndListOfQuestionsAndAnswers from './(components)/FAQWithHeaderAndListOfQuestionsAndAnswers'
import SimpleAnswerContainer from './(components)/SimpleAnswerContainer'

import SectionContainer from '~components/SectionContainer'
import {
  RSG_CDC_CAMPAIGN_ORGANISER_FORM,
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
              'Government agencies can onboard and issue RedeemSG Rewards vouchers to recipients. These typically may be incentive or reward vouchers as RedeemSG Rewards can be spent at any participating supermarkets.',
              'You may reach out to your relevant government agency or campaign organiser, for any further questions related to why you have received RedeemSG Rewards vouchers.',
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
              'Eligibility for RedeemSG Rewards will be determined by the respective government agency or campaign organiser issuing them.',
              'Please reach out to your relevant government agency or campaign organiser, for any further questions related to why you have received RedeemSG Rewards vouchers.',
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
        questionTitle: 'Where can I spend my RedeemSG Rewards vouchers?',
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
      {
        questionTitle: 'Can I gift or donate my vouchers?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              'You may share the voucher link received with people you know, including family and friends. Anyone with the voucher link will be able to access and spend the vouchers. Please do not share your voucher link with anyone else that is not meant to use the vouchers.',
              'RedeemSG does not currently support donations for RedeemSG Rewards. Please reach out to your relevant government agency or campaign organiser, for any further questions on whether they have a donation guideline.',
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
              'RedeemSG Rewards is ideal for campaigns without a preference for specific merchants where vouchers can be spent.',
              {
                beforeLinkText:
                  'With RedeemSG Rewards, we offer a selection of onboarded supermarket merchants, streamlining the operations required for agencies to onboard, train, and manage merchants. You can view the ',
                linkText: 'list of participating supermarket chains here.',
                afterLinkText:
                  ' These can be suitable for initiatives focused on providing incentives or rewards.',
                href: RSG_REWARDS_WHERE_TO_SPEND,
              },
              {
                beforeLinkText:
                  'For other campaigns in RedeemSG, you may tailor through onboarding your own list of merchants. This may help to cater to specific campaign objectives. However, please note that this would mean your team will require to onboard and manage the merchants to RedeemSG. To find out more, ',
                linkText: 'speak to us.',
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
