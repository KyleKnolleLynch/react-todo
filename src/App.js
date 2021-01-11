import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  //  get todos from local storage if any exist
  useEffect(() => {
    const getLocalTodos = () => {
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos)
    }

    getLocalTodos()
  }, [])

  //  filter list for completed todos using select input status
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.complete))
          break
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => !todo.complete))
          break
        default:
          setFilteredTodos(todos)
          break
      }
    }
    //  save to local storage
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }

    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  return (
    <div>
      <header>
        <h1>My Todos</h1>
      </header>

      <main>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </main>
    </div>
  )
}

export default App
