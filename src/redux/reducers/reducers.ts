import { combineReducers } from 'redux'
import { ToDo, FetchTodosAction } from '../actions/actions'
import { ActionTypes } from '../actions/types'
// Example of Reducer:

const todosReducer = (state: ToDo[] = [], action: FetchTodosAction) => {
  switch(action.type) {
    case ActionTypes.fetchTodos:
      return action.payload
    default:
      return state
  }
}

export interface StoreState {
  todos: ToDo[]
}

const rootReducer = combineReducers<StoreState>({
  todos: todosReducer
})

export default rootReducer