import { combineReducers, configureStore } from '@reduxjs/toolkit'

// import reducers
import testReducer from "./reduxFiles/testSlice"
import todosReducer from "./reduxFiles/todosSlice"

// redux persist
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'


// create persist config object
const persistConfig = {
  key: "root",
  storage,
}


// combine all the app reducers
const rootReducer = combineReducers({
  test: testReducer,
  todos: todosReducer,
})

// add these reducers to a persisted reducers
const persistedReducer = persistReducer(persistConfig, rootReducer)

// create store
const store =  configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
})

// export modules
export default store

export const persistor = persistStore(store)