import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Greenstone Vault – Enterprise Digital Asset Treasury',
  description: 'Secure, transparent, and connected. Manage digital assets and alternative investments alongside the tools you use every day.',
  keywords: 'digital asset treasury, enterprise crypto, treasury management, ESG assets, carbon credits, blockchain treasury',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

