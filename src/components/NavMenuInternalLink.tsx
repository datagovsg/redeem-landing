import { Link } from '@chakra-ui/next-js'

type NavLinkProps = {
  isExternal: boolean
  href: string
  label: string
  textColor: string
}

export const InternalNavMenuLink = ({
  href,
  label,
  textColor,
}: NavLinkProps) => {
  return (
    <Link
      color={textColor}
      textStyle="subhead-1"
      width="fit-content"
      variant="standalone"
      _hover={{
        textDecoration: 'underline',
      }}
      href={href}
    >
      {label}
    </Link>
  )
}
