import { Link, Text } from '@chakra-ui/react'

export type TextWithLinkProps = {
  beforeLinkText?: string
  linkText: string
  afterLinkText?: string
  linkColor?: string
  linkTextStyle?: string
  textStyle?: string
  href: string
}

// This component assumes either
// 1. Text Link
// 2. Link Text
// 3. Text Link Text
// Only can provide 1 link inside this component
const TextWithLink = ({
  beforeLinkText,
  linkText,
  afterLinkText,
  linkColor = 'primary.500',
  linkTextStyle = 'text-editor-link-small',
  textStyle,
  href,
}: TextWithLinkProps) => {
  return (
    <Text textStyle={textStyle}>
      {beforeLinkText}
      <Link
        as="a"
        textStyle={linkTextStyle}
        color={linkColor}
        href={href}
        isExternal
      >
        {linkText}
      </Link>
      {afterLinkText}
    </Text>
  )
}

export default TextWithLink
