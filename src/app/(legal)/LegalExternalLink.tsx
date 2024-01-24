import { Link, LinkProps } from '@chakra-ui/react'

const LegalExternalLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      textStyle={{ lg: 'subhead-1', base: 'body-2' }}
      width="fit-content"
      color="primary.700"
      textDecoration="underline"
      {...props}
    >
      {children}
    </Link>
  )
}

export default LegalExternalLink
