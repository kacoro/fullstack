import * as React from 'react'
import Head from 'next/head'
// import theme from '../src/theme';
// import {fetchWrapper} from '../utils/api'
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { useState } from 'react';
import { connect } from 'react-redux'
import Dashbord from './Dashbord'
type Props = {
  title?: string,
  theme:object,
  children:React.ReactNode
}


// async function fetch(){
//   const res = await fetchWrapper('http://localhost:8000/themes/5e077861736ce3041c0b3dc0')
//   if(res && res.options){
//     const myTheme =  createMuiTheme(JSON.parse(res.options))
//     return myTheme
//   }else{
//     return theme
//   }
// }

const Layout: React.FC<Props> = ({
  theme,
  children,
  title = 'This is the default title',
}) => {
  
  const [myTheme] = useState(theme);
 
  // useEffect(() => {
  //   console.log("myTheme",myTheme)
    
  //   setMyTheme(createMuiTheme(myTheme))
  // })
  // useEffect(() => {
  //   var isSubscribed = true
  //   fetch().then( theme=>{
  //     if(isSubscribed){
  //       setMyTheme(theme)
  //     }
  //   })
   
  //   return ()=> isSubscribed = false
  // },[])
  
  return (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ThemeProvider theme={myTheme}>
    <Dashbord>
      {children}
    </Dashbord>
    </ThemeProvider>
  </div>
)}

function mapStateToProps(state) {
  const { theme} = state
  return {theme:createMuiTheme(theme || {}) }
}

export default connect(mapStateToProps)(Layout)
