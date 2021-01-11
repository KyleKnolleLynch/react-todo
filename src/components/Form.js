const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //  put input text into state
  const inputTextHandler = e => {
    setInputText(e.target.value)
  }

  //  create todo
  const submitTodoHandler = e => {
    e.preventDefault()
    inputText &&
      setTodos([...todos, { text: inputText, complete: false, id: Date.now() }])
    setInputText('')
  }

  //  put select option into state
  const statusHandler = e => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        type='text'
        className='todo-input'
        value={inputText}
        onChange={inputTextHandler}
      />
      <button
        className='btn form-btn'
        type='submit'
        onClick={submitTodoHandler}
      >
        <i className='las la-plus-square la-3x'></i>
      </button>
      <div className='select'>
        <select name='todos' className='filter-todos' onChange={statusHandler}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
