import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { LanguageProvider } from '../lib/i18n/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uniquify',
  description: 'CSVファイルの重複データを排除するWebツール',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}