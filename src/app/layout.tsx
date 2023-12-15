import { GovtMasthead } from '~components/GovtMasthead'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppThemeProvider from '~components/AppThemeProvider'
import { inter } from '~constants/fonts'

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
      <body className={inter.className}>
        <AppThemeProvider>
          <GovtMasthead color="brand.primary.900" zIndex="docked" />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}
