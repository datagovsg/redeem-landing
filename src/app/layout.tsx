import type { Metadata } from 'next'

import { fonts } from './fonts'

import AppThemeProvider from '~components/AppThemeProvider'
import { GovtMasthead } from '~components/GovtMasthead'

export const metadata: Metadata = {
  description: 'Trusted voucher system of the Singapore Government',
  title: 'RedeemSG - Voucher System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonts.inter.className}>
        <AppThemeProvider>
          <GovtMasthead color="primary.900" zIndex="docked" />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}
