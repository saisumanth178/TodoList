import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className='todo-app d-flex bg-primary pb-3 text-center'>
      <TodoList />
    </div>
  );
}

export default App;