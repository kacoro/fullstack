import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer, { exampleInitialState } from './reducer'
import rootSaga from './saga'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}



const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['exampleData','count','theme'], // place to select which state you want to persist
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

function configureStore(initialState = exampleInitialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    persistedReducer,// rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}



export default configureStore
