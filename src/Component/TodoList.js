import React, { useEffect, useState } from 'react';
import FormAdd from './FormAdd';
import axios from 'axios';
import ListItemTodo from './ListItemTodo';

function TodoList() {
  const url = 'http://localhost:5000/data'

  const [todos, setTodos] = useState([]);
  //GET ALL TODOS
  useEffect(()=> {
    axios.get(url).then((res) => {
        try {
            // console.log(res.data)
            setTodos(res.data)
        } catch (err) {
            console.log(err)
        }
    })
  })

  //ADD TODO
  function addTodo(todo) {
    return axios.post(url, todo)
  }

  //Delete
  function deleteTodo(id) {
    return axios.delete(`${url}/${id}`)
  }

  //UPDATE DATA
  function updateTodo(id, todo) {
    return axios.put(`${url}/${id}`, todo)
  }

  return (
    <>
        <FormAdd addData={addTodo}/>
        <ul>
             {todos.map((todo) => (
                <ListItemTodo 
                    deleteData={deleteTodo} 
                    updateData={updateTodo}
                    todo={todo.todo} 
                    key={todo.id} 
                    id={todo.id}/>
             ))
             .reverse()}
        </ul>
    </>
  )
}

export default TodoList