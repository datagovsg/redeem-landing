import { StackProps, VStack } from '@chakra-ui/react'

type CardProps = {
  children: React.ReactNode
} & StackProps

const Card = ({ children, ...props }: CardProps) => {
  return (
    <VStack
      padding="24px"
      border="1px solid"
      borderColor="divider.medium"
      borderRadius="4px"
      {...props}
    >
      {children}
    </VStack>
  )
}

export default Card
