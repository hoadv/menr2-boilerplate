import React, { PropTypes } from 'react'
import './style.css';

const Todo = ({ onClick, completed, text, id }) => (
  <li
    onClick={e => {
      onClick(id, e.target.id)
    }}
    className={completed ? 'checked' : ''}
    id='todoItem'
  >
    {text}
    {!completed ? (<span className="edit" id="editModal" data-toggle="modal" data-target="#updateTodoModal"><i id="editModalIcon" className="fa fa-pencil-square-o" aria-hidden="true" ></i></span>) : ''}
    <span className="delete" id="delete"><i id="deleteIcon" className="fa fa-trash-o" aria-hidden="true"></i></span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo