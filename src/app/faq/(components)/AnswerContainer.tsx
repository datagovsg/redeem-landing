import { StackProps, VStack } from '@chakra-ui/react'

type AnswerContainerProps = {
  children: React.ReactNode
} & StackProps

const AnswerContainer = ({ children, ...props }: AnswerContainerProps) => {
  return (
    <VStack align="start" flexGrow={1} width="100%" spacing="32px" {...props}>
      {children}
    </VStack>
  )
}

export default AnswerContainer
