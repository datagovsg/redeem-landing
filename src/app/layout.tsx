import type { Metadata } from 'next'
import Script from 'next/script'

import { fonts } from './fonts'

import AppThemeProvider from '~components/AppThemeProvider'
import { GovtMasthead } from '~components/GovtMasthead'

export const metadata: Metadata = {
  description: 'Trusted voucher system of the Singapore Government',
  title: 'RedeemSG - Voucher System',
}

// https://docs.datadoghq.com/real_user_monitoring/guide/monitor-your-nextjs-app-with-rum/?tab=cdnasync
// Based on datadog recommendation, for App Router, it is better to choose the CDN route rather than the NPM option
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <Script id="datadog-rum">
        {`(function(h,o,u,n,d) {
          h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
          d=o.createElement(u);d.async=1;d.src=n
          n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
          })(window,document,'script','https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js','DD_RUM')
          window.DD_RUM.onReady(function() {
            window.DD_RUM.init({
            clientToken: 'pub7d60f6c91f3e16648383f783bb6506c9',
            applicationId: 'fbd611f5-4a3f-4958-982a-50dae8a4ac9a',
            site: 'datadoghq.com',
            service: 'next-app-router-rum',
            env: ${process.env.NEXT_PUBLIC_APP_ENV},
            // Specify a version number to identify the deployed version of your application in Datadog
            version: '1.0.0',
            sampleRate: 1,
            trackUserInteractions: true,
            defaultPrivacyLevel: 'mask-user-input'
          });

          window.DD_RUM.startSessionReplayRecording();
        })`}
      </Script>
      <body
        className={fonts.inter.className}
        style={{ maxWidth: '100%', overflowX: 'hidden' }}
      >
        <AppThemeProvider>
          <GovtMasthead color="primary.900" zIndex="docked" />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}
