import { HStack, StackProps } from '@chakra-ui/react'

type SectionContainerProps = {
  children: React.ReactNode
} & StackProps

const SectionContainer = ({ children, ...props }: SectionContainerProps) => {
  return (
    <HStack
      as="section"
      align="stretch"
      flexGrow={1}
      spacing={0}
      {...props}
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </HStack>
  )
}

export default SectionContainer
