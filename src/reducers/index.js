import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import selectedTodo from './selectedTodo'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  selectedTodo
})

export default todoApp