import FAQWithHeaderAndListOfQuestionsAndAnswers from './(components)/FAQWithHeaderAndListOfQuestionsAndAnswers'
import SimpleAnswerContainer from './(components)/SimpleAnswerContainer'
import {
  GetMyChangeBack,
  HowDoIApplyForVouchers,
  WhatIsRedeemSG,
} from './(AboutRedeemSGQuestions)'

import SectionContainer from '~components/SectionContainer'
import {
  RSG_CDC_CAMPAIGN_ORGANISER_FORM,
  RSG_CDC_MERCHANT_FORM,
} from '~constants/links'

export const AboutRedeemSGQuestions = [
  {
    sectionTitle: 'General questions',
    questionsAndAnswerResponses: [
      { questionTitle: 'What is RedeemSG?', AnswerResponse: WhatIsRedeemSG },
      {
        questionTitle: 'Who can use RedeemSG?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              {
                beforeLinkText:
                  'Any government agency and its affiliate partners can use RedeemSG to create, send and track vouchers. We also assess requests from charities on a case by case basis. To create and gain access to a campaign, please provide us with your info via this ',
                linkText: 'form.',
                href: RSG_CDC_CAMPAIGN_ORGANISER_FORM,
              },
              {
                beforeLinkText:
                  'For Government agencies who wish to onboard, we are currently accepting new use cases launching from 2023 onwards. For merchants who would like to participate in the CDC voucher scheme, please indicate interest ',
                linkText: 'here.',
                href: RSG_CDC_MERCHANT_FORM,
              },
            ]}
          />
        ),
      },
      {
        questionTitle: 'Which agencies currently use RedeemSG?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              'RedeemSG is used for the CDC Voucher Scheme and previously $24.8M NEA/PUB Climate Change Household Package. We are also in the process of working with several other agencies on enabling their campaigns.',
              "A previous version of RedeemSG was also used for to track >20 million redemption of items across PA/MTI's mask distribution campaigns, NDP ticketing, MINDEF's SG together pack distribution campaigns and SGUnited Buka Puasa Meals Initiative with the Roses of Peace/ MUIS/PA.",
            ]}
          />
        ),
      },
      {
        questionTitle:
          'Why is there a need for RedeemSG when there are other e-voucher systems?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              'Firstly, RedeemSG makes it very easy for agencies to easily start a government voucher campaign - this includes specifying an eligibility list for social assistance (e.g. only 1-3 room HDB households) and specifying the merchants that they want to participate in their campaign (e.g. spectacle shops only).',
              'Secondly, RedeemSG provides the agencies with the ability to automate the payout process and improve financial reconciliation as all the records are provided through the system. Thirdly, RedeemSG ensures inclusivity by providing agencies with the ability to cater to both digital and paper vouchers concurrently, which ensures the digitally less savvy are still able to access the same vouchers',
            ]}
          />
        ),
      },
      {
        questionTitle:
          'I am a voucher applicant/ recipient. How do I apply for vouchers? ',
        AnswerResponse: HowDoIApplyForVouchers,
      },
      {
        questionTitle: 'I am a merchant. How do I gain access to the app?  ',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              {
                beforeLinkText:
                  'For merchants who would like to participate in the CDC voucher scheme, please use this ',
                linkText: 'form.',
                href: RSG_CDC_MERCHANT_FORM,
              },
            ]}
          />
        ),
      },
      {
        questionTitle:
          'I am a merchant. Can I integrate with your system to accept Government vouchers?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              {
                beforeLinkText:
                  'Yes, please provide us with your details via this ',
                afterLinkText:
                  ' and we will be in touch to discuss the possibility of you integrating with our system.',
                linkText: 'form',
                href: RSG_CDC_MERCHANT_FORM,
              },
            ]}
          />
        ),
      },
      {
        questionTitle:
          'I am a Government officer. How can my ministry/agency use RedeemSG?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              {
                beforeLinkText:
                  "To indicate your ministry/agency's interest in RedeemSG, please tell us more about your needs via this ",
                afterLinkText:
                  ' and our team will be in touch shortly to assess how RedeemSG can work for your needs.',
                linkText: 'form',
                href: RSG_CDC_CAMPAIGN_ORGANISER_FORM,
              },
            ]}
          />
        ),
      },
    ],
  },
  {
    sectionTitle: 'Spending your digital vouchers',
    questionsAndAnswerResponses: [
      {
        questionTitle:
          'Why are the vouchers in fixed denominations? Can we choose or key in the exact amount of vouchers we want to use (for example, $1.50)?',
        AnswerResponse: () => (
          <SimpleAnswerContainer
            answers={[
              'The vouchers are in fixed denominations because it is less confusing for recipients, especially the digitally less-savvy, and reduces the chance for errors to occur when recipients key in the amount.',
              'This has been designed after several rounds of consultations with recipients and merchants to gather feedback on the design of the denominations. We earlier tested a e-wallet version of the voucher, which tended to be error prone and harder to use.',
            ]}
          />
        ),
      },
      {
        questionTitle:
          'Do I get my change back if the purchase (e.g. $8), is less than the amount of digital vouchers that I want to spend (e.g. $10)?',
        AnswerResponse: GetMyChangeBack,
      },
    ],
  },
] as const

const AboutRedeemSG = () => {
  return (
    <SectionContainer width="100%">
      <FAQWithHeaderAndListOfQuestionsAndAnswers
        header="About RedeemSG"
        sectionTitleAndQuestionAndAnswers={AboutRedeemSGQuestions}
      />
    </SectionContainer>
  )
}

export default AboutRedeemSG
