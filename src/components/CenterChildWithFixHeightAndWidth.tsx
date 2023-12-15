import { Flex } from '@chakra-ui/react'

type CenterChildWithFixHeightAndWidthProps = {
  children: React.ReactNode
  width: string
  height: string
  background: string
  borderRadius: string
}

const CenterChildWithFixHeightAndWidth = ({
  children,
  width,
  height,
  background,
  borderRadius,
}: CenterChildWithFixHeightAndWidthProps) => {
  return (
    <Flex
      //  Without max and min, it the container will be squashed
      alignItems="center"
      justifyContent="center"
      minWidth={width}
      maxWidth={width}
      minHeight={height}
      maxHeight={height}
      background={background}
      borderRadius={borderRadius}
    >
      {children}
    </Flex>
  )
}

export default CenterChildWithFixHeightAndWidth
