import React, { useState } from 'react'
import axios from 'axios';

function FormAdd({addData}) {
  const [initialTodo, setInitialTodo] = useState({todo: ""})
  function handlerChange(e) {
    setInitialTodo({todo: e.target.value})
    // console.log(e.target.value)
  }

  function handlerSubmit(e) {
    e.preventDefault();
    // console.log(initialTodo)
    if(initialTodo.todo !== "") {
      addData(initialTodo)
      setInitialTodo({todo: ''})
    }
  }

  return <form className="flex" onSubmit={handlerSubmit}>
    <input 
      type="text" 
      className="input-add" 
      onChange={handlerChange}
      value={initialTodo.todo}
      placeholder='Ketik todo...'/>
    <button tyoe="submit" className="btn btn__add">Add</button>
  </form>
}

export default FormAdd