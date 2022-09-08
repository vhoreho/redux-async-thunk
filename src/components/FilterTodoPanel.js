import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { showDoneTodos } from '../store/features/todoSlice';

export function FilterTodoPanel() {
  const dispatch = useDispatch();
  const btnClass = classNames('py-1 px-3 border-2 border-teal-800 rounded hover:bg-teal-800 hover:text-white')

  return (
    <div className='mb-4 flex justify-center gap-3'>
      <button className={btnClass} onClick={() => dispatch(showDoneTodos())}>Done</button>
      <button className={btnClass}>Not done</button>
    </div>
  )
}
