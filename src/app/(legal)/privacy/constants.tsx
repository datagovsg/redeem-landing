import { Text } from '@chakra-ui/react'

import LegalExternalLink from '../../../common/LegalExternalLink'
import LegalHeading from '../../../common/LegalHeading'
import LegalText from '../../../common/LegalText'
import { Line } from '../../../common/types'

export const PRIVACY: Line[] = [
  { type: 'header', value: 'General' },
  {
    type: 'text',
    value: 'This is a Government agency digital service.',
    label: '1.',
  },
  {
    type: 'text',
    value: 'Please note that:',
    label: '2.',
    children: [
      {
        type: 'text',
        label: '2.1',
        value:
          'We may use "cookies", where a small data file is sent to your browser to store and track information about you when you enter our digital services. The cookie is used to track information such as the number of users and their frequency of use, profiles of users and their preferred digital services. While this cookie can tell us when you enter our digital services and which pages you visit, it cannot read data off your hard disk.',
      },
      {
        type: 'text',
        label: '2.2',
        value:
          'You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the digital service.',
      },
      {
        type: 'text',
        label: '2.2',
        value:
          'The Service may utilise cookies to facilitate authentication and/or login to the Service. If such cookies are rejected, you might not be able to use the Service.',
      },
    ],
  },
  {
    type: 'text',
    label: '3.',
    value: 'Please see the Annex for any additional terms or information.',
  },
  {
    type: 'text',
    label: '4.',
    value:
      'For the avoidance of doubt, nothing in this Privacy Statement shall be construed as limiting or prejudicing our rights at law to collect, use or disclose any data without your consent or agreement.',
  },
  {
    type: 'header',
    value: 'Use of Data',
  },
  {
    type: 'text',
    label: '5.',
    value:
      'We may request or collect certain types of data from you in connection with your access or use of the Service. The data that may be requested/collected include those identified in the Annex herein. Your data may be stored in our servers, systems or devices, in the servers, systems or devices of our third party service providers or collaborators, or on your device, and may be used by us or our third party service providers or collaborators to facilitate your access or use of the Service. We or our third party service providers or collaborators may collect system configuration information and/or traffic information (such as an IP address) and/or use information or statistical information to operate, maintain or improve the Services or the underlying service of the third party service provider or collaborator. For the avoidance of doubt, in this Privacy Statement, a reference to a third party service provider or collaborator includes other third parties who provide a service or collaborate with our third party service provider or collaborator.',
  },
  {
    type: 'text',
    label: '6.',
    value:
      'If you provide us with personal data, or where we collect personal data from you:',
    children: [
      {
        type: 'text',
        label: '6.1.',
        value:
          'We may use, disclose and process the data for any one or more of the following purposes:',
        children: [
          {
            type: 'text',
            label: '6.1.1.',
            value:
              'to assist, process and facilitate your access or use of the Service;',
          },
          {
            type: 'text',
            label: '6.1.2.',
            value:
              'to administer, process and facilitate any transactions or activities by you, whether with us or any other Government Agency or third party service provider or collaborator, and whether for your own benefit, or for the benefit of a third party on whose behalf you are duly authorized to act;',
          },
          {
            type: 'text',
            label: '6.1.3.',
            value:
              'to carry out your instructions or respond to any queries, feedback or complaints provided by (or purported to be provided by) you or on your behalf, or otherwise for the purposes of responding to or dealing with your interactions with us;',
          },
          {
            type: 'text',
            label: '6.1.4.',
            value:
              'to monitor and track your usage of the Service, to conduct research, data analytics, surveys, market studies and similar activities, in order to assist us in understanding your interests, concerns and preferences and improving the Service (including any service of a third party service provider or collaborator) and other services and products provided by Government Agencies. For the avoidance of doubt, we may also collect, use, disclose and process such information to create reports and produce statistics regarding your transactions with us and your usage of the Services and other services and products provided by Government Agencies for record-keeping and reporting or publication purposes (whether internally or externally);',
          },
          {
            type: 'text',
            label: '6.1.5.',
            value:
              'for the purposes of storing or creating backups of your data (whether for contingency or business continuity purposes or otherwise), whether within or outside Singapore;',
          },
          {
            type: 'text',
            label: '6.1.6.',
            value:
              'to enable us to contact you or communicate with you on any matters relating to your access or use of the Service, including but not limited to the purposes set out above, via email, push notifications or such other forms of communication that we may introduce from time to time depending on the functionality of the Service and/or your device.',
          },
        ],
      },
      {
        type: 'text',
        label: '6.2.',
        value:
          'We may share necessary data with other Government Agencies, and third party service providers in connection with the Service, so as to improve or facilitate the discharge of public functions and/or serve you in the most efficient and effective way, unless such sharing is prohibited by law.',
      },
      {
        type: 'text',
        label: '6.3.',
        value:
          'We will NOT share your personal data with entities which are not Government Agencies, except where such sharing is necessary for such entities to assist us in providing the Service to you or for fulfilling any of the purposes herein.',
      },
      {
        type: 'text',
        label: '6.4.',
        value:
          'For your convenience, we may also display to you data you had previously supplied us or other Government Agencies. This will speed up the transaction and save you the trouble of repeating previous submissions. Should the data be out-of-date, please supply us the latest data.',
      },
      {
        type: 'text',
        label: '6.5.',
        value:
          'Please note that we may be required to disclose your data by law, including any law governing the use/provision of any service of a third party service provider or collaborator.',
      },
    ],
  },
  {
    type: 'text',
    label: '7.',
    value:
      'You may withdraw your consent to the use and disclosure of your data by us with reasonable notice and subject to any prevailing legal or contractual restrictions; however, doing so may prevent the proper functioning of the Service and may also result in the cessation of the Service to you.',
  },
  {
    type: 'header',
    value: 'Protection of data',
  },
  {
    type: 'text',
    label: '8.',
    value:
      'To safeguard your personal data, all electronic storage and transmission of personal data is secured with appropriate security technologies.',
  },
  {
    type: 'text',
    label: '9.',
    value:
      'The Service may contain links to external sites or services whose data protection and privacy practices may differ from ours. We are not responsible for the content and privacy practices of these other websites or services and encourage you to consult the privacy notices of those sites or services.',
  },
  {
    type: 'header',
    value: 'Contact information',
  },
  {
    type: 'text',
    label: '10.',
    value: (
      <Text as="span">
        {'Please contact '}
        <LegalExternalLink href="mailto:feedback@redeem.gov.sg">
          feedback@redeem.gov.sg
        </LegalExternalLink>
        {' if you:'}
      </Text>
    ),
    children: [
      {
        type: 'text',
        label: '10.1.',
        value:
          'have any enquiries or feedback on our data protection policies and procedures; or',
      },
      {
        type: 'text',
        label: '10.2.',
        value:
          'need more information on or access to data which you have provided to us directly in the past.',
      },
    ],
  },
  {
    type: 'header',
    value: 'Definitions',
  },
  {
    type: 'text',
    label: '11.',
    value:
      'In this Privacy Statement, “Government Agencies” means the Government (including its ministries, departments and organs of state) and public authorities (such as statutory boards) and “personal data” shall have the same meaning as its definition in the Personal Data Protection Act 2012 (No. 26 of 2012).',
  },
]

export const ANNEX: Line[] = [
  {
    type: 'text',
    label: '1.',
    value: (
      <LegalHeading>
        {'Name of Service: '}
        <LegalText>RedeemSG</LegalText>
      </LegalHeading>
    ),
  },
  {
    type: 'text',
    label: '2.',
    value: <LegalHeading>Types of data requested/collected</LegalHeading>,
    children: [
      {
        type: 'text',
        label: 'a.',
        value: 'NRIC/FIN',
      },
      {
        type: 'text',
        label: 'b.',
        value: 'Name',
      },
      {
        type: 'text',
        label: 'c.',
        value: 'Mobile number',
      },
      {
        type: 'text',
        label: 'd.',
        value: 'Address',
      },
      {
        type: 'text',
        label: 'e.',
        value: 'Residential status',
      },
      {
        type: 'text',
        label: 'f.',
        value: 'Housing type',
      },
    ],
  },
  {
    type: 'text',
    label: '3.',
    value: <LegalHeading>Additional terms</LegalHeading>,
    children: [
      {
        type: 'text',
        label: 'a.',
        value:
          'The app may contain links to other websites or services whose data collection and use policies and privacy practices may differ from ours. We are not responsible for and will have no liability in connection with the content or privacy practices of such other websites.',
      },
      {
        type: 'text',
        label: 'b.',
        value:
          'GovTech reserves the right to amend its data protection policy and the information published about the said policy from time to time. While GovTech takes reasonable care to ensure that information published about its said policy is up-to-date, GovTech does not guarantee the accuracy or completeness of such information.',
      },
      {
        type: 'text',
        label: 'c.',
        value:
          'If you are a redeemer of Items, then for the purpose of this Privacy Statement, distributors of Items are deemed to be third party collaborators. Notwithstanding Clause 6.3 of the Privacy Statement, your data may be shared with such distributors to facilitate the redemption of Items by you. The distributor may have additional terms or its own privacy policy which applies to such redemption. GovTech may (without prejudice to the Privacy Statement) use your data (such as your mobile or NRIC number) for investigative purposes (such as fraud prevention), or for purposes of appeals.',
      },
    ],
  },
]
