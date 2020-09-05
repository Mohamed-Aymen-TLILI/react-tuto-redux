import {applyMiddleware, combineReducers, createStore} from 'redux'
import {todosReducer} from './todosReducer'
import {filterReducer} from './filterReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer,
  }),
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  )
)

export default store
