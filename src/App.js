import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';
import { addNewTodo, fetchTodos } from './store/features/todoSlice';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  const handleAddTodoAction = () => {
    dispatch(addNewTodo(text));
    setText('');
  }

  return (
    <div className="h-screen">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest text-3xl font-bold">Todo List</h1>
            <NewTodoForm value={text} updateText={setText} handleAction={handleAddTodoAction} />
          </div>
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
