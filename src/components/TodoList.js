import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  //  display filtered todo list
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
