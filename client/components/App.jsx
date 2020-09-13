import React, { useState } from 'react';

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

  return (
    <div className="todoApp">
      <div className="todoList">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )

}

export default App;