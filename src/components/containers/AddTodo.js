import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import AddTodo from '../AddTodo/'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitTodo: (text) => {
      dispatch(addTodo(text));
    }
  }
}

const AddTodoConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddTodoConnect;