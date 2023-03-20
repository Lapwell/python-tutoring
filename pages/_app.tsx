import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Python Tutoring Website</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: (theme) => ({
            body: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80%',
              height: '100%',
              margin: 'auto',
            }
          }),
          colorScheme:'dark',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
