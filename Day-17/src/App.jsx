import { useState } from "react";
import InputToDo from "./Components/InputToDo.jsx";

function App() {
  const [todoList, setTodoList] = useState([]);


  const addTodo = (inputVal) => {
    setTodoList((prev) => [...prev, inputVal]);
  };

  const deleteTodo = (index) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodo(index)}>DEL</button>
          </li>
        ))}
      </ul>

      <InputToDo inputHandler={addTodo} />
    </div>
  );
}

export default App;
