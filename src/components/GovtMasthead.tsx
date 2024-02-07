'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import { RestrictedGovtMasthead } from '@opengovsg/design-system-react'

type GovtMastheadProps = BoxProps

// This is using use client manually because by default root layout is RSC, so it doesnt help to apply use client to this component
export const GovtMasthead = (props: GovtMastheadProps) => {
  return (
    <Box {...props}>
      <RestrictedGovtMasthead ssr />
    </Box>
  )
}
