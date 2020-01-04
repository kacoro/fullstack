import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';

import Layout from '../components/Layout'

import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import useInterval from '../lib/useInterval'
import { i18n, Link,withTranslation } from '../i18n'
import { startClock, serverRenderClock } from '../store'
import Examples from '../components/examples'
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

function Index({t}) {
  const dispatch = useDispatch()
  useInterval(() => {
    dispatch(startClock())
  }, 1000)
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
Index.getInitialProps = async ({ reduxStore,req}) =>{

  const isServer = !!req
  console.log(isServer)
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(serverRenderClock())
  return  {namespacesRequired: ['common']}
}
const mapDispatchToProps = { startClock }
export default  withTranslation('common')(connect(null, mapDispatchToProps)(Index))