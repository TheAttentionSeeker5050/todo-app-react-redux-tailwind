import { configureStore } from '@reduxjs/toolkit'

// import reducers
import testReducer from "./reduxFiles/testSlice"
import todosReducer from "./reduxFiles/todosSlice"

export default configureStore({
  reducer: {
    test: testReducer,
    todos: todosReducer,
  },
})