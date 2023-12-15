import { GovtMasthead } from '~components/GovtMasthead'
import type { Metadata } from 'next'
import AppThemeProvider from '~components/AppThemeProvider'
import { fonts } from './fonts'

export const metadata: Metadata = {
  title: 'RedeemSG - Voucher System',
  description: 'Trusted voucher system of the Singapore Government',
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
