import { Box, BoxProps, Text } from '@chakra-ui/react'

type BadgeProps = {
  text: string
} & BoxProps

const Badge = ({ text, ...props }: BadgeProps) => {
  return (
    <Box
      gap="4px"
      padding="4px 8px 4px 8px"
      borderRadius="4px"
      backgroundColor="primary.200"
      {...props}
    >
      <Text
        textStyle={{ md: 'subhead-1', base: 'caption-1' }}
        color="primary.500"
      >
        {text}
      </Text>
    </Box>
  )
}

export default Badge
