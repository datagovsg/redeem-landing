import LegalExternalLink from '../../LegalExternalLink'
import LegalHeading from '../../LegalHeading'
import LegalText from '../../LegalText'
import { Line } from '../../types'

export const TERM_OF_USE: Line[] = [
  {
    type: 'header',
    label: '1.',
    value: 'General',
  },
  {
    type: 'text',
    label: '1.1.',
    value: (
      <LegalText>
        {
          'These Terms of Use govern your access to and use of our services, including the application (whether as software or as a website or otherwise), its contents (including APIs, if any), push notifications and all other accompanying materials as identified in the Schedule below (collectively, the '
        }
        <LegalHeading>{'"Service”'}</LegalHeading>
        {').'}
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: '1.2.',
    value: (
      <LegalText>
        {
          'This Service is provided to you by the Government Technology Agency ('
        }
        <LegalHeading>{'"Govtech”'}</LegalHeading>
        {
          "). GovTech's office is located at 10 Pasir Panjang Road, #10-01, Mapletree Business City, Singapore 117438."
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: '1.3.',
    value: (
      <LegalText>
        {
          'By accessing or using any part of this Service, you unconditionally agree and accept to be legally bound by these Terms of Use and any amendments thereto from time to time. '
        }
        <LegalHeading>
          {
            'GovTech reserves the right to amend these Terms of Use at its sole discretion and at any time, with or without notice to you. Please read the Terms of Use carefully each time you access or use any part of this Service as (without prejudice to any other means your agreement to the Terms of Use as amended may manifest) such access or use shall constitute your agreement to the Terms of Use and any amendments to it. Your failure to do so shall not prejudice the effect or enforceability of the Terms of Use or any amendments thereto.'
          }
        </LegalHeading>
        {
          ' GovTech may, at its sole discretion and without prejudice to its other rights under this Clause 1.3, also amend these Terms of Use by providing you with notice effective immediately or such other time designated by GovTech, and such notice may be provided by any means GovTech deems appropriate (for example, by posting the notice through the Service, any website related to the Service, or by email).'
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: '1.4.',
    value: (
      <LegalHeading>
        If you do not agree to these Terms of Use, please do not use this
        Service or any part of this Service.
      </LegalHeading>
    ),
  },
  {
    type: 'text',
    label: '1.5.',
    value: (
      <LegalText>
        If you are accessing or using the Service for and on behalf of another
        entity (such as your employer), you warrant and represent that you have
        the necessary authority to bind such entity to these Terms of Use.
      </LegalText>
    ),
  },
  {
    type: 'header',
    label: '2.',
    value: 'Nature of this Service',
    children: [
      {
        type: 'text',
        value:
          'Please see the Schedule for more information and terms concerning this Service.',
      },
    ],
  },
  {
    type: 'header',
    label: '3.1',
    value: 'Licence Terms and Restrictions',
  },
  {
    type: 'text',
    label: '3.1.',
    value:
      'The Service, including the materials made available on or through the Service, is owned by, licensed to, managed or controlled by GovTech. Please see clause 4 (Third Party Materials) for more information.',
  },
  {
    type: 'text',
    label: '3.2.',
    value:
      'Subject to these Terms of Use, GovTech grants to you a non-exclusive, revocable, and non-transferable right to access and use the Service for personal or internal purposes only, and only for such use permitted by the functions of the Service and intended by GovTech.',
  },
  {
    type: 'text',
    label: '3.2A.',
    value:
      'You shall not, and shall not authorise or permit any third party to:',
    children: [
      {
        type: 'text',
        label: '3.2A.1.',
        value:
          'bypass or circumvent any technical restrictions or digital protection measures in the Service or attempt to circumvent any such restrictions;',
      },
      {
        type: 'text',
        label: '3.2A.2.',
        value:
          'reverse engineer, decompile, disassemble, modify, translate, adapt or create derivative works of the Service (whether in relation to its source code, object code, underlying structure, ideas, algorithms or otherwise);',
      },
      {
        type: 'text',
        label: '3.2A.3.',
        value:
          'reproduce, publish, distribute, transfer, publicly display, resell, rent, lease, or sublicense the Service, or loan, lend, pledge, assign, or otherwise encumber the Service to or in favour of any third party;',
      },
      {
        type: 'text',
        label: '3.2A.4.',
        value:
          'remove or obscure the copyright, trademark and other proprietary notices contained on or in the Service;',
      },
      {
        type: 'text',
        label: '3.2A.5.',
        value:
          'use the Service in any manner that is contrary to any applicable laws or regulations or rights of third parties (however arising and of whatever nature), or in a manner that constitutes harmful, fraudulent, or obscene activity;',
      },
      {
        type: 'text',
        label: '3.2A.6.',
        value:
          'make the Service available in or through a network, file-sharing service, service bureau or any similar timesharing arrangement or as a managed service provider;',
      },
      {
        type: 'text',
        label: '3.2A.7.',
        value: 'perform any benchmarking tests or analyses of the Service;',
      },
      {
        type: 'text',
        label: '3.2A.8.',
        value:
          'use the Service to create anything that would compete with the Service;',
      },
      {
        type: 'text',
        label: '3.2A.9.',
        value:
          'transfer, assign or permit the sharing of license keys to or with a third party;',
      },
      {
        type: 'text',
        label: '3.2A.10.',
        value:
          'use the Service to process or permit to be processed any code of a third party;',
      },
      {
        type: 'text',
        label: '3.2A.11.',
        value: 'provide third party access to the Service; or.',
      },
      {
        type: 'text',
        label: '3.2A.12.',
        value:
          'export the Service in violation of any international sanctions or laws applicable to US entities.',
      },
    ],
  },
  {
    type: 'text',
    label: '3.2B.',
    value:
      'All express or implied rights to the Service not specifically granted herein are expressly reserved to GovTech.',
  },
  {
    type: 'text',
    label: '3.3.',
    value: 'GovTech reserves the right to:',
    children: [
      {
        type: 'text',
        label: '3.3.1.',
        value: 'Update or modify this Service from time to time;',
      },
      {
        type: 'text',
        label: '3.3.2.',
        value:
          'Deny or restrict access to or use of the Service by any particular person without ascribing any reasons whatsoever; and',
      },
      {
        type: 'text',
        label: '3.3.3.',
        value:
          'Discontinue or terminate this Service at any time without notice or liability to you whatsoever, whereupon all rights granted to you hereunder shall also terminate forthwith. You shall further upon notice from GovTech return or destroy all copies of the Service or materials therein that you may have been provided with.',
      },
    ],
  },
  {
    type: 'text',
    label: '3.4.',
    value:
      "You will not interfere or attempt to interfere with the proper working of the Service or otherwise do anything that imposes an unreasonable or disproportionately large load on GovTech's servers.",
  },
  {
    type: 'text',
    label: '3.5x.',
    value:
      'You shall comply with all set-up procedures and requirements, as well as all policies, guidelines, rules, notices and instructions relating to the Service as may be issued by and/or amended by GovTech from time to time.',
  },
  {
    type: 'header',
    label: '3A.',
    value: 'Account Access and Security',
  },
  {
    type: 'text',
    label: '3A.1.',
    value:
      'You are solely responsible for maintaining the confidentiality and security of any authentication credentials associated with your use of the Service, including the security of any of your devices which store the authentication credentials.',
  },
  {
    type: 'text',
    label: '3A.2.',
    value:
      'GovTech shall be entitled, but not obliged, to verify the identity of the person using the Service. Without prejudice to the foregoing, GovTech is not under any duty to verify that any biometric identifier used with the Service, or on your device, belongs to you.',
  },
  {
    type: 'text',
    label: '3A.3.',
    value:
      'GovTech shall have the sole and absolute discretion to invalidate any authentication credentials at any time, or require you to have to re-authenticate or refresh your authentication credentials at any time, without having to give any reason for the same.',
  },
  {
    type: 'text',
    label: '3A.4.',
    value:
      'GovTech shall be entitled, but not obliged, to act upon or rely on any instructions, information, transmissions of data, or communications received from the account or use of the Service in relation to your authentication credentials, as if such instructions, information, data or communications were issued by you, whether or not the same was authorized by you.',
  },
  {
    type: 'text',
    label: '3A.5.',
    value:
      'For the avoidance of doubt, you are solely responsible for any loss of whatever nature arising from unauthorized or unofficial modifications made to your device which permit or escalate privileged access, or remove restrictions to such access, which are not intended by the manufacturer or provider of your device or operating system of your device (e.g., “rooting” or “jailbreaking” your mobile phone).',
  },
  {
    type: 'header',
    label: '4.',
    value: 'Third Party Materials',
  },
  {
    type: 'text',
    label: '4.1.',
    value: (
      <LegalText>
        {
          'The Service may require, enable or facilitate access to or use of software or services of a third party ('
        }
        <LegalHeading>{'“Third Party”'}</LegalHeading>
        {
          '). In such an event, there may be terms of use of the third party software or service (the '
        }
        <LegalHeading>{'“Third Party Terms”'}</LegalHeading>
        {
          '). GovTech may be required under or as a result of the Third Party Terms to notify you of certain terms that apply to you (either directly as an end user, or as a party whose acts or omissions could cause GovTech to breach the Third Party Terms) when you use the Services. An example of Third Party Terms may be open source software terms or standard form terms of the distribution platform from which you obtain any part of the Service (e.g. Google Play Store or Apple App Store terms) which bind GovTech as a developer or user of the distribution platform (the '
        }
        <LegalHeading>{'“Distribution Terms”'}</LegalHeading>
        {
          "). Information on the Third Party Terms are embedded in the Service, already accounted for in these Terms of Use, publicly available (e.g the Distribution Terms) or otherwise indicated in the Schedule herein. For the avoidance of doubt, insofar as this Clause 4 relates to the Distribution Terms, the relevant Distribution Terms are the terms of the specific platform from which you obtained a copy of the software or application that is part of the Service. For example, if you obtained the said copy from the Google Play Store, then the relevant terms are Google's Distribution Terms."
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: '4.2.',
    value: (
      <LegalText>
        <LegalHeading>
          {
            'It is your responsibility to check and read the most up-to-date versions of these Third Party Terms and you are deemed to have notice of the same.'
          }
        </LegalHeading>
        {
          ' In particular, you are deemed to have notice of the Third Party Terms that GovTech (under the Third Party Terms) is required to notify you, and you unconditionally agree to be bound by all the obligations in the Third Party Terms which are applicable to you (whether as end user, or as a party whose acts or omissions could cause GovTech to breach the Third Party Terms, or otherwise). For the avoidance of doubt, where Third Party Terms are listed, such Third Party Terms shall be deemed to include any privacy policies and acceptable use policies as are applicable to you.'
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: '4.3.',
    value:
      'If the Third Party Terms require you to enter into an agreement directly with the Third Party, then you unconditionally agree to enter into such agreement, and in any event, to be legally bound by the Third Party Terms. For the avoidance of doubt:',
    children: [
      {
        type: 'text',
        label: '4.3.1',
        value:
          'some Third Party Terms (particularly open-source terms) permit either a direct licence to you from the Third Party or a sublicence from GovTech to you. In such cases, your licence is a direct licence from the Third Party to you; and',
      },
      {
        type: 'text',
        label: '4.3.2',
        value:
          'the terms of your agreement with the Third Party will govern your use of the relevant third party software or service, and not these Terms of Use.',
      },
    ],
  },
  {
    type: 'text',
    label: '4.4.',
    value: (
      <LegalText>
        {
          'If the Third Party Terms expressly or impliedly require GovTech to incorporate certain terms in these Terms of Use (inclusive of terms which impose any minimum or maximum standards herein, and/or terms described in Clause 4.5 below), such terms are deemed to have been so incorporated (the '
        }
        <LegalHeading>{'“Incorporated Terms”'}</LegalHeading>
        {
          '). Examples of Incorporated Terms include provisions which require GovTech to give you notice of certain rights and liabilities or require GovTech to ensure that you acknowledge certain matters. Similarly, if the Third Party Terms expressly or impliedly require these Terms of Use to be altered such that the Third Party Terms are complied with, the parties herein agree that the Terms of Use shall be deemed to be so altered but only to the extent necessary for compliance.'
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: '4.5.',
    value:
      'Some Third Party Terms grant the Third Party, or require GovTech to grant the Third Party, direct rights of enforcement of these Terms of Use as a third party beneficiary, against you. Such Third Party Terms are deemed to have been incorporated into these Terms of Use as Incorporated Terms, and you hereby agree to grant such Third Party, such direct rights of enforcement against you.',
  },
  {
    type: 'text',
    label: '4.5A.',
    value:
      "Unless the applicable Third Party Terms permit you to commence legal proceedings against the relevant Third Party, you shall not threaten or commence legal proceedings against a Third Party without GovTech's prior written approval.",
  },
  {
    type: 'text',
    label: '4.6.',
    value:
      'For the avoidance of doubt, without prejudice to Clause 4.4, to the extent of any inconsistency between these Terms of Use and the Third Party Terms, the latter shall prevail provided nothing in the Third Party Terms increases the liability of GovTech beyond that stated in Clause 6.',
  },
  {
    type: 'text',
    label: '4.7.',
    value:
      'Without prejudice and in addition to the foregoing, GovTech shall not be responsible for your use of any software or service of a Third Party.',
  },
  {
    type: 'header',
    label: '5.',
    value: 'Your Consent to Your Data and to Access Functions of Your Device',
  },
  {
    type: 'text',
    label: '5.1.',
    value:
      'You hereby grant to GovTech a non-exclusive, worldwide, perpetual and royalty-free right to collect, use, disclose, process, modify, adapt, create derivative works of, reproduce, and sublicense any and all information or data submitted, uploaded or shared by you to the extent necessary to provide the Service or for any other purpose expressly or impliedly provided in these Terms of Use, or as permitted by law.',
  },
  {
    type: 'text',
    label: '5.2.',
    value:
      'Use of the Service may require you to allow access by the Service to certain functions of your device, such as push notifications, the obtaining and/or sharing of your location, or the collection of data from you in connection with the Service. Your use of the Service shall constitute your consent to the access by the Service of such functions of your device as may be reasonably required by the Service.',
  },
  {
    type: 'text',
    label: '5.3.',
    value:
      "You further irrevocably and unconditionally waive, and shall cause to be irrevocably and unconditionally waived, all existing and future moral rights (including the right of identification) wherever in the world in respect of any information or data submitted, uploaded or shared by you (including feedback, requests or suggestions concerning the Services) to GovTech. Such waiver shall also extend to GovTech's licencees, assigns and successors-in-title.",
  },
  {
    type: 'text',
    label: '5.4.',
    value: 'Please also see clause 8 (Privacy Statement).',
  },
  {
    type: 'header',
    label: '5A.',
    value: 'Ownership of Feedback/Requests/Suggestions',
    children: [
      {
        type: 'text',
        value:
          'You agree that all title and interest in any feedback, requests or suggestions from you concerning the Services provided to GovTech shall be owned by GovTech and, without prejudice and in addition to clause 5.3, you shall waive all rights existing in or in respect of the same (including, for the avoidance of doubt, any signature requirements).',
      },
    ],
  },

  {
    type: 'header',
    label: '5B.',
    value: 'Confidentiality',
  },
  {
    type: 'text',
    label: '5B.1.',
    value: (
      <LegalText>
        {
          'If you receive information or data (in whatever form) from GovTech or a Third Party which is designated confidential or proprietary or is otherwise reasonably understood to be confidential or proprietary (collectively, '
        }
        <LegalHeading>{'“Confidential Information”'}</LegalHeading>
        {
          '), you shall not use, disclose or reproduce the Confidential Information except for the purpose for which it was provided to you. If consent to disclose the Confidential Information to a third party is given by GovTech or the Third Party to you, any act or omission in respect of the Confidential Information by that person shall be deemed to be your act or omission and you agree to be fully liable for the same. In all cases, you shall protect the Confidential Information to the same extent you protect your own confidential information but in no event less than a reasonable standard of care. You shall ensure that any recipients are bound by confidentiality terms at least as restrictive as this Clause.'
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: '5B.2.',
    value:
      'You shall destroy any Confidential Information immediately upon request by GovTech or the Third Party.',
  },
  {
    type: 'text',
    label: '5B.3.',
    value: 'In the event:',
    children: [
      {
        type: 'text',
        label: '5B.3.1.',
        value:
          'you are, or likely to be, required by an order of court to disclose Confidential Information; or',
      },
      {
        type: 'text',
        label: '5B.3.2.',
        value:
          'you have reasonable grounds to suspect the unauthorised use or disclosure or reproduction of Confidential Information;',
      },
      {
        type: 'text',
        value:
          'you shall immediately notify GovTech or the Third Party of the same and cooperate with GovTech or the Third Party to prevent or limit such disclosure.',
      },
    ],
  },
  {
    type: 'text',
    label: '5B.4.',
    value:
      "Nothing in this Clause 5B shall prejudice GovTech's or the Third Party's other rights at law.",
  },
  {
    type: 'header',
    label: '6.',
    value: 'Disclaimers and Indemnity',
  },
  {
    type: 'text',
    label: '6.1.',
    value: (
      <LegalHeading>
        {
          'The Service is provided on an "as is" and “as available” basis without warranties of any kind. To the fullest extent permitted by law, GovTech does not make any representations or warranties of any kind whatsoever in relation to the Service and hereby disclaims all express, implied and/or statutory warranties of any kind to you or any third party, whether arising from usage or custom or trade or by operation of law or otherwise, including but not limited to any representations or warranties:'
        }
      </LegalHeading>
    ),
    children: [
      {
        type: 'text',
        label: '6.1.1.',
        value: (
          <LegalHeading>
            as to the accuracy, completeness, correctness, currency, timeliness,
            reliability, availability, interoperability, security,
            non-infringement, title, merchantability, quality or fitness for any
            particular purpose of the Service; and/or
          </LegalHeading>
        ),
      },
      {
        type: 'text',
        label: '6.1.2.',
        value: (
          <LegalHeading>
            that the Service or any functions associated therewith will be
            uninterrupted or error-free, or that defects will be corrected or
            that this Service, website and the server are and will be free of
            all viruses and/or other malicious, destructive or corrupting code,
            programme or macro.
          </LegalHeading>
        ),
      },
    ],
  },
  {
    type: 'text',
    label: '6.2.',
    value: (
      <LegalHeading>
        GovTech shall also not be liable to you or any third party for any
        damage or loss of any kind whatsoever and howsoever caused, including
        but not limited to any direct or indirect, special or consequential
        damages, loss of income, revenue or profits, lost or damaged data, or
        damage to your computer, software or any other property, whether or not
        arising directly or indirectly from –
      </LegalHeading>
    ),
    children: [
      {
        type: 'text',
        label: '6.2.1.',
        value: (
          <LegalHeading>
            your access to or use of this Service, or any part thereof;
          </LegalHeading>
        ),
      },
      {
        type: 'text',
        label: '6.2.2.',
        value: (
          <LegalHeading>
            any loss of access or use of this Service or any part of this
            Service, howsoever caused;
          </LegalHeading>
        ),
      },
      {
        type: 'text',
        label: '6.2.3.',
        value: (
          <LegalHeading>
            any inaccuracy or incompleteness in, or errors or omissions in the
            transmission of, the Service;
          </LegalHeading>
        ),
      },
      {
        type: 'text',
        label: '6.2.4.',
        value: (
          <LegalHeading>
            any delay or interruption in the transmission of the Service,
            whether caused by delay or interruption in transmission over the
            internet or otherwise; or
          </LegalHeading>
        ),
      },
      {
        type: 'text',
        label: '6.2.5.',
        value: (
          <LegalHeading>
            any decision made or action taken by you or any third party in
            reliance upon the Service,
          </LegalHeading>
        ),
      },
      {
        type: 'text',
        value: (
          <LegalHeading>
            regardless of whether GovTech has been advised of the possibility of
            such damage or loss.
          </LegalHeading>
        ),
      },
    ],
  },
  {
    type: 'text',
    label: '6.3.',
    value: (
      <LegalHeading>
        Without prejudice and in addition to the foregoing, insofar as the
        Service facilitates or requires the provision, use or functioning of, or
        is provided in conjunction with, other products, software, materials
        and/or services not provided by GovTech, GovTech makes no representation
        or warranty in relation to such products, software, materials and/or
        services (including without limitation any representation or warranties
        as to timeliness, reliability, availability, interoperability, quality,
        fitness for purpose, non-infringement, suitability or accuracy).
      </LegalHeading>
    ),
  },
  {
    type: 'text',
    label: '6.4.',
    value:
      "You shall not rely on any part of the Service to claim or assert any form of legitimate expectation against GovTech, whether or not arising out of or in connection with GovTech's roles and functions as a public authority. GovTech shall have no responsibility or liability to you or any third party arising out of or in connection with any fraud, phishing, or any other illegal act or omission by other parties in relation to the Service and it is your own responsibility to ensure that the Service you are using or accessing is from a legitimate source.",
  },
  {
    type: 'text',
    label: '6.5.',
    value: (
      <LegalHeading>
        You agree to defend and indemnify and keep GovTech and its officers,
        employees, agents and contractors harmless against all liabilities,
        losses, damages, costs or expenses (including legal costs on an
        indemnity basis) howsoever arising out of or in connection with your
        access or use of the Service (including third party software or
        services) or your non-compliance with the Terms of Use, Third Party
        Terms or Incorporated Terms, whether or not you had been advised or
        informed of the nature or extent of such liabilities, losses, damages,
        costs or expenses. You warrant and represent that your access or use of
        the Service does not and will not breach or violate any laws,
        regulations, trade, economic and/or export sanctions (wherever in the
        world) applicable to you, and that you shall not transmit any malicious
        code, illegal, infringing or undesirable content or materials to GovTech
        or its agents or any Third Party.
      </LegalHeading>
    ),
  },
  {
    type: 'text',
    label: '6.6.',
    value:
      'GovTech shall have the right to take any and all necessary actions/omissions to protect its interests, including complying with any legal requirements (such as taking down, disabling and disabling access to, removing (permanently or temporarily), and/or restoring (including restoring access to) any materials contained in, accessed through, uploaded to, and/or made available via the Service in response to any take-down or restoration notices). You agree that GovTech is not obliged to determine the merits of any take-down or restoration notices. You further waive any rights arising as a result of the actions/omissions taken by GovTech.',
  },
  {
    type: 'text',
    label: '6.7.',
    value: "Without prejudice and in addition to GovTech's other rights:",
    children: [
      {
        type: 'text',
        label: '6.7.1.',
        value:
          "in no event shall GovTech's total cumulative liability arising out of or in connection with these Terms of Use to you exceed the amount of fees or payment received by GovTech (and not paid or given to any Third Party by GovTech) from you for the Service in the 12 months preceding the date of the first cause of action; and",
      },
      {
        type: 'text',
        label: '6.7.2',
        value:
          'no action may be brought by you against GovTech arising out of or in connection with these Terms of Use more than one (1) year after the cause of action arose.',
      },
    ],
  },
  {
    type: 'header',
    label: '7.',
    value: 'Hyperlinks',
  },
  {
    type: 'text',
    label: '7.1.',
    value:
      'Insofar as the Service provides a hyperlink to material not maintained or controlled by GovTech, GovTech shall not be responsible for the content of the hyperlinked material and shall not be liable for any damages or loss arising from access to the hyperlinked material. Use of the hyperlinks and access to such hyperlinked materials are entirely at your own risk. The hyperlinks are provided merely as a convenience to you and do not imply endorsement by, association or affiliation with GovTech of the contents of or provider of the hyperlinked materials.',
  },
  {
    type: 'text',
    label: '7.1.',
    value:
      "Caching and hyperlinking to, and the framing of, any part of the Service is prohibited save where you have obtained GovTech's prior written consent. Such consent may be subject to any conditions as may be determined by GovTech in its sole discretion. If you hyperlink to or frame any part of the Service, that shall constitute your acceptance of these Terms of Use and all amendments thereto. If you do not accept these Terms of Use as may be amended from time to time, you must immediately discontinue linking to or framing of any part of the Service.",
  },
  {
    type: 'text',
    label: '7.1.',
    value: 'GovTech reserves all rights:',
    children: [
      {
        type: 'text',
        label: '7.3.1.',
        value:
          'to disable any links to, or frames of, any materials which are unauthorised (including without limitation materials which imply endorsement by or association or affiliation with GovTech, materials containing inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topics, names, or information that violates any written law, any applicable intellectual property, proprietary, privacy or publicity rights); and',
      },
      {
        type: 'text',
        label: '7.3.2.',
        value:
          'to disclaim responsibility and/or liability for materials that link to or frame any part of the Service.',
      },
    ],
  },
  {
    type: 'header',
    label: '8.',
    value: 'Privacy Statement',
    children: [
      {
        type: 'text',
        value:
          'You also agree to the terms of the Government Agency Privacy Statement for this Service as may be amended from time to time. The Government Agency Privacy Statement will form part of these Terms of Use.',
      },
    ],
  },
  {
    type: 'header',
    label: '9.',
    value: 'Rights of Third Parties',
    children: [
      {
        type: 'text',
        value:
          'Subject to the rights of the Third Party and/or Singapore public sector agencies, a person who is not a party to this Terms of Use shall have no right under the Contract (Rights of Third Parties) Act or otherwise to enforce any of its terms. Variation or rescission of these Terms of Use shall not require the consent of any third party, including any Third Party and/or other Singapore public sector agencies.',
      },
    ],
  },
  {
    type: 'header',
    label: '10.',
    value: 'Assignment',
  },
  {
    type: 'text',
    label: '10.1.',
    value:
      'You may not assign or sub-contract this Terms of Use without the prior written consent of GovTech.',
  },
  {
    type: 'text',
    label: '10.2.',
    value:
      'GovTech may assign, novate, transfer, or sub-contract the rights and liabilities in respect of the Service and this Terms of Use, without notifying you and without further reference to you. Your acceptance of this Terms of Use shall also constitute your consent to such assignment, novation, transfer or sub-contract.',
  },
  {
    type: 'header',
    label: '10A.',
    value: 'Severability',
    children: [
      {
        type: 'text',
        value:
          'If any term of these Terms of Use is held by a court or tribunal of competent jurisdiction to be invalid or unenforceable, then these Terms of Use, including all of the remaining terms, will remain in full force and effect as if such invalid or unenforceable term had never been included but, to the extent permissible, such invalid or unenforceable terms shall be deemed to have been replaced by terms that are (a) valid and enforceable and (b) express the intention or produce the result closest to the original intention of the invalid or unenforceable terms.',
      },
    ],
  },
  {
    type: 'header',
    label: '10B.',
    value: 'Order of Precedence',
    children: [
      {
        type: 'text',
        value:
          'In the event of any conflict, inconsistency or ambiguity between or in any one or more terms in these Terms of Use, such conflict, inconsistency or ambiguity shall be resolved in favour of GovTech and the provision or interpretation which is more favourable to GovTech shall prevail. Notwithstanding any other term, GovTech has the sole and absolute discretion to determine which term or interpretation is more favourable to it and such decision shall be binding on you.',
      },
    ],
  },
  {
    type: 'header',
    label: '10C.',
    value: 'Entire Agreement',
    children: [
      {
        type: 'text',
        value:
          'These Terms of Use contains the entire and whole agreement concerning the subject matter of these Terms of Use. The Terms of Use supersedes all prior written or oral representations, agreements and/or understandings between GovTech and yourself. Except for amendments by GovTech under these Terms of Use, no amendment to these Terms of Use shall be of any force unless agreed upon in writing by both parties.',
      },
    ],
  },
  {
    type: 'header',
    label: '10D.',
    value: 'Waiver',
    children: [
      {
        type: 'text',
        label: '10D.1.',
        value: (
          <LegalText>
            {
              'Any delay, failure or omission on the part of GovTech in enforcing any right, power, privilege, claim or remedy ('
            }
            <LegalHeading>{'“Remedy"'}</LegalHeading>
            {
              '), which is conferred under the Terms of Use or at law or in equity, or arises from any breach by you, shall not (a) be deemed to be or be construed as a waiver or variation of the Remedy, or of any other such Remedy, in respect of the particular circumstances in question, or (b) operate so as to bar the enforcement or exercise of the Remedy, or of any other such Remedy in any other subsequent instances.'
            }
          </LegalText>
        ),
      },
      {
        type: 'text',
        label: '10D.2.',
        value:
          'No waiver by GovTech of any breach of the Terms of Use by you shall be deemed to be a waiver of any other or of any subsequent breach.',
      },
      {
        type: 'text',
        label: '10D.3.',
        value:
          'Any waiver by GovTech granted under the Terms of Use must be in writing and may be given subject to conditions. Such waiver under the Terms of Use shall be effective only in the instance and for the purpose for which it is given.',
      },
    ],
  },
  {
    type: 'header',
    label: '11.',
    value: 'Governing Law and Dispute Resolution',
  },
  {
    type: 'text',
    label: '11.1.',
    value:
      'These Terms of Use shall be governed by and construed in accordance with laws of Singapore.',
  },
  {
    type: 'text',
    label: '11.2.',
    value:
      'Subject to clause 11.3, any dispute arising out of or in connection with these Terms of Use, including any question regarding its existence, validity or termination, shall be referred to and finally resolved in the Courts of the Republic of Singapore and the parties hereby submit to the exclusive jurisdiction of the Courts of the Republic of Singapore.',
  },
  {
    type: 'text',
    label: '11.3.',
    value: (
      <LegalText>
        {
          'GovTech may, at its sole discretion, refer any dispute referred to in clause 11.2 above to arbitration administered by the Singapore International Arbitration Centre ('
        }
        <LegalHeading>{'“SIAC”'}</LegalHeading>
        {
          ') in Singapore in accordance with the Arbitration Rules of the SIAC ('
        }
        <LegalHeading>{'"SIAC Rules"'}</LegalHeading>
        {
          ') for the time being in force, which rules are deemed to be incorporated by reference in this clause. Further:'
        }
      </LegalText>
    ),
    children: [
      {
        type: 'text',
        label: '11.3.1.',
        value: 'The seat of the arbitration shall be Singapore.',
      },
      {
        type: 'text',
        label: '11.3.2.',
        value: 'The tribunal shall consist of one (1) arbitrator.',
      },
      {
        type: 'text',
        label: '11.3.3.',
        value: 'The language of the arbitration shall be English.',
      },
      {
        type: 'text',
        label: '11.3.4.',
        value:
          'All information, pleadings, documents, evidence and all matters relating to the arbitration shall be confidential.',
      },
      {
        type: 'text',
        value:
          'Where GovTech is the defendant or respondent, it shall be given at least 30 days before the commencement of any legal action against it to elect to exercise the right herein to have the dispute submitted to arbitration. This right to elect shall not prejudice GovTech’s right to a limitation defence and the period to exercise the right shall not be abridged by reason of any accrual of a limitation defence in favour of GovTech during the said period.',
      },
    ],
  },
]

export const SCHEDULE: Line[] = [
  {
    type: 'header',
    label: '1.',
    value: (
      <LegalText>
        <LegalHeading>{'Name of Service: '}RedeemSG</LegalHeading>
      </LegalText>
    ),
  },
  {
    type: 'header',
    label: '2.',
    value: 'Nature of Service',
  },
  {
    type: 'text',
    label: 'a.',
    value:
      'This Service facilitates the tracking of the redemption of vouchers (which includes any tickets, chits, or other similar documents for exchange or redemption). The “campaign” in this Schedule refers to any such redemption programme. The Terms of Use apply to you whether you are a campaign organizer, individual redeeming a voucher, system integrating with RedeemSG or using any RedeemSG APIs, or merchant participating in a campaign using RedeemSG. The Service includes, without limitation, APIs and administrative interfaces. GovTech reserves the right to withhold from you or terminate certain functionalities of the Service. For example, if you are a redeemer of a voucher, you will not be granted access to the administrator portal for tracking redemption which is used by the campaign organizer or merchant.',
  },
  {
    type: 'text',
    label: 'b.',
    value: (
      <LegalText>
        {'GovTech '}
        <LegalHeading>DOES NOT</LegalHeading>
        {' manage and is '}
        <LegalHeading>NOT</LegalHeading>
        {
          ' responsible for the fulfilment and quality of the operations involved in redemption of vouchers. As such, it is not responsible for ensuring that campaign organizers or merchants provide the items in exchange for a voucher. It is also not responsible for any other services required for the campaign’s operations - e.g. internet disruption at collection points, advertising, or crowd control measures. If you as campaign organizer have partnered with merchants for the redemption of your vouchers, you are responsible for reimbursing such merchants and for working with merchants to ensure the quality of operations. Conversely, if you are a merchant accepting these vouchers, you are responsible for seeking reimbursement from the campaign owner. GovTech is not responsible for the terms of distribution or redemption, if any, between the campaign organizer and the merchant.'
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: 'c.',
    value: (
      <LegalText>
        {'GovTech '}
        <LegalHeading>DOES NOT</LegalHeading>
        {
          ' own or decide on the parameters for each redemption campaign, such as the voucher value and eligible items. It does not provide the eligibility criteria or recipient list for the campaign. It does not manage the sign up of recipients, verifiers, merchants and administrators of the campaign. It also does not determine the stakeholders involved and timeframe for each campaign.'
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: 'd.',
    value: (
      <LegalText>
        {'GovTech '}
        <LegalHeading>DOES NOT</LegalHeading>
        {
          ' handle any payment to or accept refunds from merchants for vouchers used at their stores. It is not responsible for accounting, financial reporting, financial reconciliation, financial governance and audit related to the voucher programmes or campaign, nor is it responsible for errors in payment to merchants or wrongful claims for payments by merchants.'
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: 'e.',
    value: (
      <LegalText>
        {'GovTech '}
        <LegalHeading>DOES NOT</LegalHeading>
        {
          ' responsible for the terms of voucher/ticket use at each merchant. Insofar as a merchant is involved in a campaign, any issues concerning payment (such as refunds and cancellations) should be directed to the merchant or campaign owner.'
        }
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: 'f.',
    value:
      'If you are a campaign organizer or merchant, it is your responsibility to ensure that any terms or privacy policies concerning the distribution or redemption which you require are communicated to the recipient or merchant (as the case may be). Your terms and privacy policy must be consistent with the terms herein. In certain cases, you might be required to provide GovTech with a copy of your terms to determine issues concerning redemption.',
  },
  {
    type: 'text',
    label: 'g.',
    value:
      'Campaign organizers and merchants are responsible for ensuring compliance with all applicable laws, including without limitation the Personal Data Protection Act and Spam Control Act.',
  },
  {
    type: 'text',
    label: 'h.',
    value:
      'If you are a redeemer of vouchers, you are to note that the campaign organizer and/or merchant may impose additional terms or privacy policies to the redemption.',
  },
  {
    type: 'text',
    label: 'i.',
    value:
      'If you are the campaign organizer (such as the voucher issuer), you are required to agree to additional terms in order to use the Service. Please check with GovTech for details on these additional terms. Additionally, you are solely responsible for setting the eligibility criteria, recipient list, managing the sign up process and determining the stakeholders involved for the campaigns you manage. You are responsible for ensuring the right financial governance processes and controls are in place. Use of merchant data obtained from other campaigns, where made available to you, shall be solely at your risk and you acknowledge that such data may not be accurate or up to date. Your use of merchant data shall be consistent with the terms herein, and in particular, unless expressly permitted by the merchant in your agreement with the merchant for your campaign or by applicable law, you shall not use merchant data for any purpose except where consent has been given under the terms herein.',
  },
  {
    type: 'text',
    label: 'j.',
    value:
      'If you are a merchant, please note that any data submitted by you (including business, personal and/or bank details) for use of or through the Service may or will be shared with other campaign organizers or for different campaigns to facilitate the use of RedeemSG for other public sector/ charity campaigns, to inform or update you on, and/or to invite you to sign up for, other or upcoming campaigns. The data may or will also be used to pre-fill sign-up forms for campaigns. For the avoidance of doubt, the sharing or use of such data does not automatically sign you up for a campaign.',
  },
  {
    type: 'header',
    label: '3.',
    value: 'Third party software/services',
  },
  {
    type: 'text',
    label: 'a.',
    value: (
      <LegalText>
        {"Google's distribution terms "}
        <LegalExternalLink href="https://play.google.com/about/developer-distribution-agreement.html">
          https://play.google.com/about/developer-distribution-agreement.html
        </LegalExternalLink>
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: 'b.',
    value: (
      <LegalText>
        {"Apple's distribution terms - "}
        <LegalExternalLink href="https://developer.apple.com/services-account/download?path=/Documentation/License_Agreements__Apple_Developer_Program03232K20/Apple_Developer_Program_License_Agreement_20200323.pdf">
          Apple Developer Program License Agreement
        </LegalExternalLink>
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: 'c.',
    value: (
      <LegalText>
        {'Twilio '}
        <LegalExternalLink href="https://www.twilio.com/legal/tos/2019">
          https://www.twilio.com/legal/tos/2019
        </LegalExternalLink>
        {' (in particular, the acceptable use and privacy policies)'}
      </LegalText>
    ),
  },
  {
    type: 'text',
    label: 'd.',
    value: (
      <LegalText>
        {'Postmark '}
        <LegalExternalLink href="https://postmarkapp.com/terms-of-service">
          https://postmarkapp.com/terms-of-service
        </LegalExternalLink>
        {' (in particular, the acceptable use and privacy policies)'}
      </LegalText>
    ),
  },
]
