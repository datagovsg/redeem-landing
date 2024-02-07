import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Icon,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { useMemo } from 'react'

// These icons are not imported from react-icons as it is not supported yet
// https://github.com/react-icons/react-icons/issues/538
import { BiErrorCircle, BiInfoCircle } from './icons'

interface InfoboxProps extends FlexProps {
  size?: ThemingProps<'Infobox'>['size']
  variant?: ThemingProps<'Infobox'>['variant']
  /**
   * The content of the infobox.
   */
  text: React.ReactNode

  button?: React.ReactNode

  /**
   * Icon to show on the left of the infobox.
   * If not specified, a default icon will be used according to the infobox variant.
   * Provide `null` to hide the icon.
   */
  icon?: React.ReactNode
}

const Infobox = ({
  variant = 'info',
  text,
  button,
  icon: iconProp,
  size,
  ...flexProps
}: InfoboxProps) => {
  const styles = useMultiStyleConfig('Infobox', { variant, size })

  const iconToRender = useMemo(() => {
    if (iconProp) {
      return <Box __css={styles.icon}>{iconProp}</Box>
    }
    return (
      <Icon
        as={variant !== 'danger' ? BiInfoCircle : BiErrorCircle}
        __css={styles.icon}
        type="solid"
      />
    )
  }, [iconProp, styles.icon, variant])

  return (
    <Flex sx={styles.messagebox} {...flexProps}>
      <HStack
        alignItems="flex-start"
        alignSelf="center"
        width="100%"
        height="100%"
        maxHeight="max-content"
      >
        {iconToRender}
        {text}
      </HStack>
      <Box marginLeft="24px">{button}</Box>
    </Flex>
  )
}

export default Infobox
