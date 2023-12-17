import { StackProps, VStack } from '@chakra-ui/react'

type SectionContainerProps = {
  children: React.ReactNode
} & StackProps

const SectionContainer = ({ children, ...props }: SectionContainerProps) => {
  return (
    <VStack as="section" align="stretch" flexGrow={1} spacing={0} {...props}>
      {children}
    </VStack>
  )
}

export default SectionContainer
