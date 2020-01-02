import React from 'react';
import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { NextPageContext, NextComponentType } from 'next';
import { appWithTranslation } from '../i18n'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const Noop = ({ children }) => children

type LayoutComponent = NextComponentType<NextPageContext, any, any> & {
  Layout?: any;
};
interface Props extends AppProps {
  Component: LayoutComponent;
  reduxStore:any
}
 class MyApp extends App<Props> {
   state: any;
  constructor(props) {
    super(props)
    this.state = {persistor : persistStore(props.reduxStore)}
  }  
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
    const { Component, pageProps,reduxStore} = this.props;
   
    const Layout = Component.Layout || Noop
    return (
      <Provider store={reduxStore}>
          <PersistGate
          loading={<Component {...pageProps} />}
          persistor={this.state.persistor}
        >
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
      </PersistGate>
      </Provider>
    );
  }
}

export default appWithTranslation(withReduxStore(MyApp))