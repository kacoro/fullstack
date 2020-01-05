import React from 'react';
import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { NextPageContext, NextComponentType } from 'next';
import { appWithTranslation } from '../i18n'

import { Provider } from 'react-redux'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from '../redux-saga/store'
const Noop = ({ children }) => children

type LayoutComponent = NextComponentType<NextPageContext, any, any> & {
  Layout?: any;
};
interface Props extends AppProps {
  Component: LayoutComponent;
  store:any
}
 class MyApp extends App<Props> {
   persistor: import("redux-persist").Persistor;
   constructor(props) {
    super(props)
    this.persistor = persistStore(props.store)
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
    const { Component, pageProps,store} = this.props;
   
    const Layout = Component.Layout || Noop
    return (
      <Provider store={store}>
          <PersistGate
          loading={<Component {...pageProps} />}
          persistor={this.persistor}
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

// export default appWithTranslation(withReduxStore(MyApp))

export default withRedux(createStore)(withReduxSaga(appWithTranslation(MyApp)))