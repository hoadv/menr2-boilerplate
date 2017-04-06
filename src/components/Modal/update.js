import React, { PropTypes } from 'react'
import $ from 'jquery';

const UpdateModal = ({ updateTodo, text, updateInput }) => {
  return (
    <div className="modal fade" id="updateTodoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <form onSubmit={e => {
        e.preventDefault()
        if (!text.trim()) {
          return
        }
        updateTodo();
        $('#closeBtn').click();
      } }>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Todo</h5>
              <button id="closeBtn" type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="todoTitle" className="form-control-label">Title:</label>
                <input id="todoTitle" value={text} className="form-control" 
                onChange={(event) => {
                  updateInput(event.target.value)
                  }
              } />
              </div>
            </div>
            <div className="modal-footer">
              <input type="submit" className= {(!text.trim()) ? 'disabled' : 'btn btn-primary'} value="Update" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

UpdateModal.propTypes = {
  updateTodo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  updateInput: PropTypes.func.isRequired
}

export default UpdateModal