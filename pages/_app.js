import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from '@smooth-ui/core-sc';
import { GlobalStyle } from '../src/components';
import theme from '../src/theme'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Salón bugambilias</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
