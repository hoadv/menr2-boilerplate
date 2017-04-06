import React, { PropTypes } from 'react'
import './style.css';

const AddTodo = ({submitTodo}) => {
  let input;
  return (
    <div className="header">
       <h2>My To Do List</h2>
       <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          submitTodo(input.value)
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} placeholder="Title..." id="inputTodo" />
          <button type="submit" className="addBtn" id="btnAddTodo" >
            Add
          </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired
}

export default AddTodo