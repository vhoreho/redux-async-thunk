import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { toggleTodo, deleteTodo } from '../store/features/todoSlice';

export function TodoItem({ data }) {
  const dispatch = useDispatch();
  const { title, id, completed } = data;
  const completedClass = classNames('w-full text-grey-darkest', { 'text-teal-900 font-bold': completed });

  return (
    <div className="flex mb-4 items-center border-2 px-3 py-2 border-teal-500 rounded">
      <p className={completedClass}>{title}</p>
      <button
        className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600"
        onClick={() => dispatch(toggleTodo(id))}
      >
        Done
      </button>
      <button
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        onClick={() => dispatch(deleteTodo(id))}
      >
        Remove
      </button>
    </div>
  )
}
