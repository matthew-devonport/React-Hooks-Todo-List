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

      </div>
    </div>
  )

}

export default App;