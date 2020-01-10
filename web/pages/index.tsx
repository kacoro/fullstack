import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Layout from '../components/Layout'
import { connect } from 'react-redux'

import { i18n, Link,withTranslation } from '../i18n'
// import { startClock, serverRenderClock } from '../store'
import Examples from '../components/examples'
import { loadData,  tickClock,startClock,loadTheme } from '../redux-saga/actions'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Index({dispatch,t}) {
  dispatch(startClock())
  return (
    <Layout>
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
       
        </Typography>
        <Link href="/about">
          <a> Go to the about page</a>
        </Link>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}
        >
          {t('h1')}
        </button>
        <Examples />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </Layout>
  );
}
Index.getInitialProps = async ({ store,req}) =>{

  const isServer = !!req
  console.log(isServer)
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    // store.dispatch(serverRenderClock())
  
    store.dispatch(tickClock(isServer))
    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }
    if (!store.getState().theme) {
      store.dispatch(loadTheme())
    }
 
  return  {namespacesRequired: ['common'],isServer}
}
// const mapDispatchToProps = { startClock }
export default  withTranslation('common')(connect()(Index))