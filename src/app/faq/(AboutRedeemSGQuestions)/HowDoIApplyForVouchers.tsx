import { Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'

import AnswerContainer from '../(components)/AnswerContainer'

const BULLET_POINTS = [
  {
    href: 'https://www.climate-friendly-households.gov.sg/',
    label: 'NEA Climate Change Household Package',
  },
  { href: 'https://vouchers.cdc.gov.sg/', label: 'CDC Voucher Scheme' },
]

const HowDoIApplyForVouchers = () => {
  return (
    <AnswerContainer textStyle="body-2" color="content.default">
      <Text>
        If you are a voucher applicant/ recipient, you will need to apply for
        vouchers at the relevant campaign organizer sign up page. Please refer
        to the relevant campaign page that you are participating in below.
      </Text>
      <UnorderedList>
        {BULLET_POINTS.map(({ href, label }) => (
          <ListItem key={label}>
            <Link
              textStyle="text-editor-link-small"
              color="primary.500"
              _hover={{
                color: 'primary.600',
              }}
              href={href}
              isExternal
            >
              {label}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </AnswerContainer>
  )
}

export default HowDoIApplyForVouchers
