let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const getEditTodo = (todo) => {
  return {
    type: 'SELECTED_TODO',
    todo
  }
}

export const updateTodoTitle = (newTitle, todo) => {
  return {
    type: 'UPDATE_TODO_TITLE',
    todo,
    newTitle
  }
}

export const editTodo = (newTodo) => {
  return {
    type: 'EDIT_TODO',
    newTodo
  }
}