import React from 'react'

const Todo = ({ todo: { id, text, complete }, todos, setTodos }) => {
    //  toggle todo completed
  const completeHandler = () => {
    setTodos(
      todos.map(el => {
        if (el.id === id) {
          return { ...el, complete: !complete }
        }
        return el
      })
    )
  }

  //    delete todo
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== id))
  }

  return (
    <div className='todo'>
      <button className='btn checkbox' onClick={completeHandler}>
        {complete ? <span>&#10003;</span> : null}
      </button>
      <li className={`todo-text ${complete && 'completed'}`}>{text}</li>
      <button className='btn trash' onClick={deleteHandler}>
        <i className='las la-recycle la-2x'></i>
      </button>
    </div>
  )
}

export default Todo
