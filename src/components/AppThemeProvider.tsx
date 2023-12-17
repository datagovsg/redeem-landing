'use client'

import { useRef } from 'react'
import { Box } from '@chakra-ui/react'
import { ThemeProvider } from '@opengovsg/design-system-react'
import { CacheProvider } from '@chakra-ui/next-js'

import { theme } from '~theme/theme'

type AppThemeProviderProps = {
  children: React.ReactNode
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  // Manually set toast container ref to ensure its placed above modals
  // https://github.com/chakra-ui/chakra-ui/issues/6276
  const toastContainerRef = useRef<HTMLDivElement | null>(null)

  return (
    <ThemeProvider
      theme={theme}
      toastOptions={{
        portalProps: { containerRef: toastContainerRef },
      }}
    >
      {children}
      <Box ref={toastContainerRef} id="toast-container" />
    </ThemeProvider>
  )
}

export default AppThemeProvider
