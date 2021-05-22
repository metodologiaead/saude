import React, { useEffect } from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import Analytics from 'components/Analytics'
import { ServerStyleSheet } from 'styled-components'
import Hotjar from 'components/Hotjar'

import useHotjar from 'react-use-hotjar'

const myCustomLogger = console.info

export default class NextDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { initHotjar } = useHotjar()

    React.useEffect(() => {
      initHotjar(2415059, 6, false, myCustomLogger)
    }, [initHotjar])

    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel="preload"
            href="/fonts/poppins-v9-latin-regular.woff2"
            as="font"
            crossOrigin=""
          />

          <Analytics />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
          <Hotjar />
        </body>
      </Html>
    )
  }
}
