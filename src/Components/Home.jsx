import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Todos from './Todos'
import NewTodo from './NewTodo'



const Home = () => {
  const [todos,setTodos] = useState([])

  const handleAddTodo=(newTodo)=>{
    
    setTodos((todos)=>{
      return [...todos, {id: uuidv4(), newTodo}]
    })
  }
  const handleDeleteTodo = (todoId) =>{
    const filteredTodo = todos.filter((todo)=> todo.id !== todoId)
    setTodos(filteredTodo)
  
  }
  return (
    <div className='flex flex-col h-screen justify-center items-center '>
      <h1 className='text-white font-light text-[3rem]'>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onDelete={handleDeleteTodo}/>
    </div>
  )
}

export default Home;