import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';

import Layout from '../components/Layout'

import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import useInterval from '../lib/useInterval'
import { i18n, Link, withTranslation } from '../i18n'
import Clock from '../components/clock'
import Counter from '../components/counter'

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

function Index({ t }) {
  const dispatch = useDispatch()
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)
  return (
    <Layout>
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
        {t('h1')}
        </Typography>
        <Link href="/about">
          Go to the about page
        </Link>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}
        >
          {t('change-locale')}
        </button>
        <Clock />
        <Counter />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </Layout>
  );
}
Index.getInitialProps = async ({ reduxStore }) =>{
  const { dispatch } = reduxStore
  dispatch({
    type: 'TICK',
    light: typeof window === 'object',
    lastUpdate: Date.now(),
  })
  return  {namespacesRequired: ['common']}
}
export default withTranslation('common')(withRedux(Index))