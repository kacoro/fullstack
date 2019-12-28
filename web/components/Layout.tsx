import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import theme from '../src/theme';
import {fetchWrapper} from '../utils/api'
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
type Props = {
  title?: string
}

async function fetch(){
  const res = await fetchWrapper('http://localhost:8000/themes/5e077861736ce3041c0b3dc0')
  console.log(res.options)
  if(res && res.options){
    const myTheme =  createMuiTheme(JSON.parse(res.options))
    console.log(myTheme)
    return myTheme
  }else{
    return theme
  }
}

const Layout: React.FC<Props> = ({
  
  children,
  title = 'This is the default title',
}) => {
  const [myTheme, setMyTheme] = useState(theme);
  useEffect(() => {
    (async function anyNameFunction() {
      let theme = await fetch();
      setMyTheme(theme)
    })();
  },[])
 
  return (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Checkbox defaultChecked />
    <ThemeProvider theme={myTheme}>
    <header>
    <Checkbox defaultChecked />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    </ThemeProvider>
  </div>
)}

export default Layout