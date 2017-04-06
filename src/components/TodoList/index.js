import React, { PropTypes } from 'react'
import Todo from '../Todo/'
import './style.css';
import UpdateModal from '../Modal/update';

const TodoList = ({ todos, onTodoClick, selectedTodo, onUpdateInput, onUpdateTodo }) => {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={(id, targetId) => {
           onTodoClick(id, targetId, todo);
          } }
          />
      )}

      <UpdateModal {...selectedTodo} updateTodo={() => onUpdateTodo(selectedTodo)} updateInput={(newTitle) => onUpdateInput(newTitle, selectedTodo)}></UpdateModal>
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  selectedTodo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onUpdateInput: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired
}

export default TodoList