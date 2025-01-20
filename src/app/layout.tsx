import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: "Home - Digital Billboard Florida",
  description: 'Digital Billboard Florida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={ `${inter.className} bg-gray-200\tmin-h-screen dark:bg-[#0d1117] `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          {children}
        </ThemeProvider>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CE4X6ZPPRM"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CE4X6ZPPRM');
          `}
        </Script>
      </body>
    </html>
  )
}