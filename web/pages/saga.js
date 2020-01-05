import React from 'react'
import { connect } from 'react-redux'

import { loadData, startClock, tickClock } from '../redux-saga/actions'
import Page from '../components/saga-demo/page'

class Index extends React.Component {
  static async getInitialProps({store,req}) {
    const isServer = !!req
    store.dispatch(tickClock(isServer))
    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  componentDidMount() {
    this.props.dispatch(startClock())
  }

  render() {
    return <Page title="Index Page" linkTo="/" NavigateTo="Home Page" />
  }
}

export default connect()(Index)
