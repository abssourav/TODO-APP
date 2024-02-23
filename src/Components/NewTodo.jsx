import React, { useState } from 'react'

const NewTodo = (props) => {
  const [newTodo, setNewTodo] = useState({ title: '', desc: '' })
  const { title, desc } = newTodo

  const handleInput = (e) => {
    setNewTodo((oldTodos) => {
      return { ...oldTodos, [e.target.name]: e.target.value }
    })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    props.onAddTodo(newTodo)
    setNewTodo({ title: '', desc: '' })

  }



  return (
    <div className=' bg-[#2C2C2C] w-2/4 p-5'>
      <form onSubmit={handleFormSubmit} className='flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <label htmlFor="title" className='text-white font-bold text-lg '>Title: </label>
          <input type="text" name='title' onChange={handleInput} value={title} className='w-[75%] p-2 rounded-lg' required />
        </div>
        <div className='flex justify-between'>
          <label htmlFor="desc" className='text-white font-bold text-md'>Description: </label>
          <input type="text" name='desc' onChange={handleInput} value={desc} className='w-[75%] p-5 rounded-lg' required />
        </div>
        <div className='w-full flex justify-center'>
          <button type='submit' className='bg-[#FF5905] rounded-md p-3 font-bold'>
            Add Todo
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewTodo
