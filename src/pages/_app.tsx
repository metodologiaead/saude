import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'
import WhatsAppWidgets from 'components/WhatsAppWidgets'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#417B48" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="Venha evoluir na área da saúde,valores imperdíveis"
        description="Faça sua Pós-Graduação totalmente ONLINE. Conclusão de 4 há 6 meses, TCC opcional."
        canonical="https://saude.metodologiaead.com.br"
        openGraph={{
          url: 'https://saude.metodologiaead.com.br',
          title: 'Venha evoluir na área da saúde,valores imperdíveis',
          description:
            'Faça sua Pós-Graduação totalmente ONLINE. Conclusão de 4 há 6 meses, TCC opcional.',
          images: [
            {
              url: '/img/cover.png'
            }
          ],
          site_name: 'Venha evoluir na área da saúde,valores imperdíveis',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@bellmont_sistema',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
      <WhatsAppWidgets />
    </ThemeProvider>
  )
}

export default App
