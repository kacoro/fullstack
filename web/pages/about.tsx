import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Layout from '../components/Layout';
import {  Link, withTranslation } from '../i18n'
import { connect } from 'react-redux'

import {  loadTheme } from '../redux-saga/actions'

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

function About({ t }) {
  return (
    <Layout>
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
        {t('h1')}
        </Typography>
        <Link href="/"><a>Go to the main page</a></Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </Layout>
  );
}
About.getInitialProps = async ({ store,req}) =>{

  const isServer = !!req
  console.log(isServer)
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    // store.dispatch(serverRenderClock())
    if (!store.getState().theme) {
      store.dispatch(loadTheme())
    }
  return  {namespacesRequired: ['common'],isServer}
}
export default withTranslation('common')(connect()(About))