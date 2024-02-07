import { ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'

import AnswerContainer from '../(components)/AnswerContainer'

const BULLET_POINTS = [
  'E-vouchers that get sent to voucher recipients via SMS that open up in a weblink.',
  'The RedeemSG merchant app that allows Merchants to easily accept vouchers by scanning the voucher QR codes and tally their transactions',
  'APIs that merchants can integrate with to accept Government issued vouchers.',
  'An admin portal that allows Government agencies to manage a voucher campaign, from creating vouchers, sending vouchers, to tracking the redemption records.',
]

const WhatIsRedeemSG = () => {
  return (
    <AnswerContainer textStyle="body-2" color="content.default">
      <Text>
        RedeemSG is a voucher system for the Singapore Government developed by
        Open Government Products, GovTech. For voucher recipients, it helps to
        digitize vouchers. For merchants, it makes it much easier to accept
        government issued vouchers.For Government agencies and charities, it
        makes it much easier to start and manage a voucher campaign, and make it
        much easier for merchants to accept Government issued vouchers. RedeemSG
        today is used by several agencies such as NEA/PUB and PA for the CDC
        Voucher scheme.
      </Text>
      <VStack align="start" spacing={0}>
        <Text>RedeemSG comprises:</Text>
        <UnorderedList>
          {BULLET_POINTS.map((point) => (
            <ListItem key={point}>{point}</ListItem>
          ))}
        </UnorderedList>
      </VStack>
    </AnswerContainer>
  )
}

export default WhatIsRedeemSG
