import React, { useState } from 'react';

function Todo({ todo, index, completeTodo }) {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
      {todo.text}
      <div className="todoComplete">
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
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
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add item to list"/>
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
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="todoApp">
      <div className="todoList">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )

}

export default App;