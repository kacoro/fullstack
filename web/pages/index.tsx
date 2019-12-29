import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';

import Layout from '../components/Layout'
import { i18n, Link, withTranslation } from '../i18n'
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
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </Layout>
  );
}
Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})
export default withTranslation('common')(Index)