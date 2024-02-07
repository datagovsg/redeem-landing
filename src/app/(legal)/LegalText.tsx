import { Text, TextProps } from '@chakra-ui/react'

const LegalText = ({ children, ...props }: TextProps) => {
  return (
    <Text
      as="span"
      textStyle={{ lg: 'legal-text-lg', base: 'legal-text-base' }}
      {...props}
      color="black"
    >
      {children}
    </Text>
  )
}

export default LegalText
