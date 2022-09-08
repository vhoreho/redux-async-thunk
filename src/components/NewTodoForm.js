import React from 'react'

export function NewTodoForm({ value, updateText, handleAction }) {
  return (
    <div className="flex mt-4">
      <input
        className="shadow outline-none appearance-none border-2 rounded-l border-r-0 w-full py-2 px-3 text-gray-800 border-teal-600"
        placeholder="Add Todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button
        className="flex-no-shrink p-2 border-2 rounded-r text-teal-600 border-teal-600 hover:text-white hover:bg-teal-600"
        onClick={handleAction}
      >
        Add
      </button>
    </div>
  )
}
