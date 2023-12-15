import { Box, BoxProps } from '~components/chakra'
import { RestrictedGovtMasthead } from '~components/design-system'

type GovtMastheadProps = BoxProps

export const GovtMasthead = (props: GovtMastheadProps) => {
  return (
    <Box {...props}>
      <RestrictedGovtMasthead ssr />
    </Box>
  )
}
