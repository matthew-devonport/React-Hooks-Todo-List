import React, { useState } from 'react';

function Todo({ todo, index }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}


function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Item number one',
      isCompleted: false
    },
    {
      text: 'Item number two',
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const NewTodos = [...todos, { text }];
    setTodos(NewTodos);
  }

  return (
    <div className="todoApp">
      <div className="todoList">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )

}

export default App;