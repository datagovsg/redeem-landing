import { Text } from '@chakra-ui/react'

import LegalExternalLink from '~/app/LegalExternalLink'
import LegalHeading from '~/app/LegalHeading'
import LegalText from '~/app/LegalText'
import { Line } from '~/app/types'

import {
  RSG_REWARDS_TERM_OF_USE,
  RSG_REWARDS_WHERE_TO_SPEND,
} from '~constants/links'

export const TERM_OF_USE: Line[] = [
  {
    type: 'text',
    label: '1.',
    value: 'This RedeemSG Rewards voucher is:',
    children: [
      {
        type: 'text',
        label: 'a.',
        value: 'Expressed in Singapore Dollars;',
      },
      {
        type: 'text',
        label: 'b.',
        value: (
          <Text as="span">
            {'Redeemable at participating merchants found '}
            <LegalExternalLink href={RSG_REWARDS_WHERE_TO_SPEND}>
              here
            </LegalExternalLink>
            {' and/or displaying the RedeemSG Rewards identifier'}
          </Text>
        ),
      },
      {
        type: 'text',
        label: 'c.',
        value:
          'Not valid for purchase of lottery products, petrol, diesel, alcohol or cigarettes;',
      },
      {
        type: 'text',
        label: 'd.',
        value:
          'not exchangeable for cash or gift vouchers and is not for resale; and',
      },
      {
        type: 'text',
        label: 'e.',
        value: 'Not renewable upon expiry and the expiry date is final.',
      },
    ],
  },
  {
    type: 'text',
    label: '2.',
    value:
      'Multiple vouchers may be used in a single transaction and any unused amount or value in a voucher is not refundable.',
  },
  {
    type: 'text',
    label: '3.',
    value: (
      <LegalText>
        {
          'Recipients will receive vouchers either via (a) a voucher link obtained by logging in by Singpass, (b) receiving the voucher link directly from a public sector agency or private sector entity which has onboarded on the RedeemSG Rewards Scheme (the '
        }
        <LegalHeading>{'“Scheme”'}</LegalHeading>
        {
          '), or (c) receiving or claiming hardcopies of the vouchers from a public sector agency or private sector entity which has onboarded on the Scheme. The Government Technology Agency ('
        }
        <LegalHeading>{'“GovTech”'}</LegalHeading>
        {
          ') is not responsible for the means by which the recipients receive their voucher links or hardcopies.'
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: '4.',
    value: (
      <LegalText>
        {'Where hardcopies of the vouchers are printed (the '}
        <LegalHeading>{'“Voucher Printouts”'}</LegalHeading>
        {'):'}
      </LegalText>
    ),
    children: [
      {
        type: 'text',
        label: 'a.',
        value:
          'defaced, damaged or expired Voucher Printouts will not be accepted at the participating merchants.',
      },
    ],
  },
  {
    type: 'text',
    label: '5.',
    value:
      'No matter your method of redemption or use of the voucher (whether through the RedeemSG web portal, through Singpass or by hardcopy), GovTech:',
    children: [
      {
        type: 'text',
        label: 'a.',
        value:
          'does not make any representations or warranties of any kind whatsoever in relation to the availability, non-infringement, reliability, or security of the Scheme or this voucher or that the Scheme or this voucher will be uninterrupted, error-free, or that defects will be corrected or that the Scheme or this voucher will be free from viruses and/or other malicious, destructive or corrupting code, programme or macro. GovTech disclaims all express, implied and/or statutory warranties in respect of the same. Additionally, GovTech does not warrant the quality or fitness for purpose of the goods or services obtained through the use of this voucher;',
      },
      {
        type: 'text',
        label: 'b.',
        value:
          'shall not be liable to you or any third party for any claims, demands, losses, costs, expenses and/or liabilities of any kind (whether direct or indirect) arising from or in connection with:',
        children: [
          {
            type: 'text',
            label: 'i.',
            value: 'the Scheme or your use of this voucher;',
          },
          {
            type: 'text',
            label: 'ii.',
            value:
              'any transaction or dealing between the participating merchants and the voucher holder; and/or',
          },
          {
            type: 'text',
            label: 'iii.',
            value:
              'any transaction or dealing between the voucher holder and the entity from which the voucher holder received this voucher,',
          },
          {
            type: 'text',
            value:
              'regardless of whether GovTech has been advised of the possibility of such for any claims, demands, losses, costs, expenses and/or liabilities;',
          },
        ],
      },
      {
        type: 'text',
        label: 'c.',
        value:
          'may terminate your rights to this voucher and/or the Scheme at any time without notice or liability to you whatsoever; and',
      },
      {
        type: 'text',
        label: 'd.',
        value: (
          <LegalText>
            {
              'reserves the right to amend these terms and conditions at any time. Any updates to these terms and conditions may be found at '
            }
            <LegalExternalLink href={RSG_REWARDS_TERM_OF_USE}>
              term of use
            </LegalExternalLink>
          </LegalText>
        ),
      },
    ],
  },
  {
    type: 'text',
    label: '6.',
    value:
      'You shall not rely on any part of the Scheme or voucher to claim or assert any form of legitimate expectation against GovTech, whether or not arising out of or in connection with GovTech’s roles and functions as a public authority. GovTech shall have no responsibility or liability to you or any third party arising out of or in connection with any fraud, phishing, or any other illegal act or omission by other parties in relation to the Scheme or voucher and it is your own responsibility to ensure that the Scheme or voucher you are using or accessing is from a legitimate source.',
  },
  {
    type: 'text',
    label: '7.',
    value:
      'You agree to defend and indemnify and keep GovTech and its officers, employees, agents and contractors harmless against all liabilities, losses, damages, costs or expenses (including legal costs on an indemnity basis) howsoever arising out of or in connection with the Scheme or voucher, or your non-compliance with the terms herein, whether or not you had been advised or informed of the nature or extent of such liabilities, losses, damages, costs or expenses. You warrant and represent that your access or use of the Scheme or voucher does not and will not breach or violate any laws, regulations, trade, economic and/or export sanctions (wherever in the world) applicable to you, and that you shall not transmit any malicious code, illegal, infringing or undesirable content or materials to GovTech or its agents.',
  },
  {
    type: 'text',
    label: '8.',
    value:
      'In the event of any conflict, inconsistency or ambiguity between or in any one or more terms of RedeemSG (which can be found at https://redeem.gov.sg/terms-of-use.html) and/or these terms herein, such conflict, inconsistency or ambiguity shall be resolved in favour of GovTech and the provision or interpretation which is more favourable to GovTech shall prevail. Notwithstanding any other term, GovTech has the sole and absolute discretion to determine which term or interpretation is more favourable to it and such decision shall be binding on you.',
  },
  {
    type: 'text',
    label: '9.',
    value: (
      <LegalText>
        {
          "All data including your personal data collected may be used, disclosed to and stored in applications or platforms (such as RedeemSG) which are owned by, licensed to, managed or controlled by other public sector agencies or private sector entities which have onboarded on the Scheme and  GovTech for the purposes of administering the Scheme. Your personal data may also be used and/or disclosed to other public sector agencies or other private sector entities for such other purposes as may be permitted under the applicable laws. GovTech's Privacy Statement ("
        }
        <LegalExternalLink href="https://redeem.gov.sg/privacy.html">
          here
        </LegalExternalLink>
        {') shall also apply.'}
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: '10.',
    value:
      'Subject to clause 11, any dispute arising out of or in connection with these terms, including any question regarding its existence, validity or termination, shall be referred to and finally resolved in the Courts of the Republic of Singapore and the parties hereby submit to the exclusive jurisdiction of the Courts of the Republic of Singapore.',
  },
  {
    type: 'text',
    label: '11.',
    value:
      'GovTech may, at its sole discretion, refer any dispute referred to in clause 9 above to arbitration administered by the Singapore International Arbitration Centre (“SIAC”) in Singapore in accordance with the Arbitration Rules of the SIAC ("SIAC Rules") for the time being in force, which rules are deemed to be incorporated by reference in this clause. Further:',
    children: [
      {
        type: 'text',
        label: 'a.',
        value: 'The seat of the arbitration shall be Singapore.',
      },
      {
        type: 'text',
        label: 'b.',
        value: 'The tribunal shall consist of one (1) arbitrator.',
      },
      {
        type: 'text',
        label: 'c.',
        value: 'The language of the arbitration shall be English.',
      },
      {
        type: 'text',
        label: 'd.',
        value:
          'All information, pleadings, documents, evidence and all matters relating to the arbitration shall be confidential.',
      },
      {
        type: 'text',
        value:
          'Where GovTech is the defendant or respondent, it shall be given at least 30 days before the commencement of any legal action against it to elect to exercise the right herein to have the dispute submitted to arbitration. This right to elect shall not prejudice GovTech’s right to a limitation defense and the period to exercise the right shall not be abridged by reason of any accrual of a limitation defense in favor of GovTech during the said period.',
      },
    ],
  },
]
