// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {title, id} = todoDetails

  const deleteTodo = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button type="button" className="del-btn" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
