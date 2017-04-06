import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, getEditTodo, updateTodoTitle, editTodo } from '../../actions/';
import TodoList from '../TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    selectedTodo: state.selectedTodo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id, firedElementId, todo) => {
      switch(firedElementId) {
        case 'todoItem':
          dispatch(toggleTodo(id));
          break;
        case 'editModal':
        case 'editModalIcon':
          dispatch(getEditTodo(todo));
          break;
        case 'delete':
        case 'deleteIcon':
          if (confirm("Are you sure want to delete this?")) {
            dispatch(deleteTodo(id));
          }
          break;
      }
    },
    onUpdateInput: (newText, todo) => {
      dispatch(updateTodoTitle(newText, todo));
    },
    onUpdateTodo: (todo) => {
      dispatch(editTodo(todo));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList