import React from 'react'

import { BsTrashFill } from "react-icons/bs";

const Todo = (props) => {
  const {title,desc} = props.todo
  const {todoId} = props

  

  const handleDeleteButton = (e) =>{
    e.preventDefault()
    props.onDelete(todoId)
  }
  return (
    <div className='bg-[#f16e2c] p-5 flex items-center justify-between rounded-md'>
     <div >
     <h1 className='text-white text-[1.5rem] font-semibold'>{title}</h1>
      <h3 className='text-white text-[1rem] opacity-80'>{desc}</h3>
     </div>
      <form onSubmit={handleDeleteButton}>
        <button type='submit'>
          <BsTrashFill />
        </button>
      </form>
    </div>
  )
}

export default Todo
