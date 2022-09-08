import React from 'react';
import { TodoItem } from './TodoItem'

export function TodoList({ todos }) {

  if (todos.length === 0) return <h2 className='text-xl text-teal-900 font-bold'>Todos is empty</h2>

  return (
    <div>
      {todos.map(todo => <TodoItem key={todo.id} data={todo} />)}
    </div>
  )
}
