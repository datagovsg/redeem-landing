import { Text, TextProps } from '@chakra-ui/react'

const LegalHeading = ({ children, ...props }: TextProps) => {
  return (
    <Text
      as="span"
      textStyle={{ lg: 'legal-header-lg', base: 'legal-header-base' }}
      color="neutral.900"
      {...props}
      marginTop="1.5rem"
    >
      {children}
    </Text>
  )
}

export default LegalHeading
