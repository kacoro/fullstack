import React from 'react';
import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { NextPageContext, NextComponentType } from 'next';
const Noop = ({ children }) => children

type LayoutComponent = NextComponentType<NextPageContext, any, any> & {
  Layout?: any;
};
interface Props extends AppProps {
  Component: LayoutComponent;
}
export default class MyApp extends App<Props> {
  
  async componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
    
  }
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
   
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
      
    }
   
    return {pageProps}
  }
  
  render() {
    const { Component, pageProps} = this.props;
   
    const Layout = Component.Layout || Noop
    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <div className="app">
          <Layout>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        </Layout>
        </div>
      </React.Fragment>
   
    );
  }
}