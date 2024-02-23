import React from 'react'

import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className=' bg-[#2C2C2C] w-2/4 p-5 mt-5 flex flex-col gap-3 max-h-[50vh] overflow-y-auto scroll-m-1'>
      {props.todos.map((todo) => <Todo key={todo.id} todo={todo.newTodo} todoId={todo.id} onDelete={props.onDelete}/>)}
    </div>
  )
}

export default Todos
