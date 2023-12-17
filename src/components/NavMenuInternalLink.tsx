import { InternalLink } from '~components/InternalLink'

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
    <InternalLink
      color={textColor}
      textStyle="subhead-1"
      width="fit-content"
      // @ts-ignore. Seems like a ts bug that doesnt recognise variant after forwarding props
      variant="standalone"
      _hover={{
        textDecoration: 'underline',
      }}
      href={href}
    >
      {label}
    </InternalLink>
  )
}
