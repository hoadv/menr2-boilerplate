const selectedTodo = (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED_TODO':
      return Object.assign({}, action.todo);
    case 'UPDATE_TODO_TITLE':
      let todo = Object.assign({}, action.todo);
      todo.text = action.newTitle;
      return todo;
    default:
      return {id: -1, text: ''}
  }
}

export default selectedTodo