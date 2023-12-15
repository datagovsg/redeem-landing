import { InternalLink } from '~components/InternalLink'

type NavLinkProps = {
  isExternal: boolean
  href: string
  label: string
}

export const InternalNavMenuLink = ({ href, label }: NavLinkProps) => {
  return (
    <InternalLink
      color="primary.700"
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
