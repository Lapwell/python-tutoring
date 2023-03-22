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
            fontSizes: {
              xs: '0.6rem',
              sm: '0.75rem',
              md: '0.9rem',
              lg: '1rem',
              xl: '1.2rem',
            },
            body: {
              ...theme.fn.fontStyles(),
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              lineHeight: theme.lineHeight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80%',
              height: '100%',
              margin: 'auto',
            },
            '.calendly-inline-widget': {
              width: '500px',
            }
          }),
          colorScheme:'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}