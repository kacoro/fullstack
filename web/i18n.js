/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

import NextI18Next from 'next-i18next'
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
console.log(localeSubpaths)
const localeSubpathVariations = {
  none: {},
  foreign: {
    zh: 'zh',
  },
  all: {
    en: 'en',
    zh: 'zh',
  },
}
const languages = ['en', 'zh']
const NextI18NextInstance = new NextI18Next({
  allLanguages:['en','zh'],
  defaultLanguage: 'en',
  otherLanguages: ['zh'],
  localeSubpaths:  {
    zh: 'zh'
  }
})

NextI18NextInstance.i18n.languages = ['zh']
export default NextI18NextInstance
export const {
  appWithTranslation,
  withTranslation,
  Link,
  i18n
} = NextI18NextInstance