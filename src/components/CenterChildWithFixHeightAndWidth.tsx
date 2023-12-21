import { Flex, FlexProps } from '@chakra-ui/react'

type CenterChildWithFixHeightAndWidthProps = {
  background: string
  borderRadius: string
  children: React.ReactNode
  height: FlexProps['height']
  width: FlexProps['width']
}

const CenterChildWithFixHeightAndWidth = ({
  background,
  borderRadius,
  children,
  height,
  width,
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
