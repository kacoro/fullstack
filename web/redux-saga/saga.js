/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import {fetchWrapper} from '../utils/api'
import { actionTypes, failure, loadDataSuccess,loadThemeSuccess, tickClock} from './actions'

es6promise.polyfill()

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
  
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* loadTheme() {
  try {
    console.log('loadTheme')
    const res = yield fetch('http://localhost:8000/themes/5e077861736ce3041c0b3dc0')
    const data = yield res.json()
  
    yield put(loadThemeSuccess(JSON.parse(data.options)))
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.LOAD_THEME, loadTheme),
  ])
}

export default rootSaga
