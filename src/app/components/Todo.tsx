"use client";
import React, { useState } from "react";

const Todo = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: " hello", completed: false },
    { todoText: "todo 1", completed: true },
    { todoText: "todo2", completed: false },
    { todoText: "apple", completed: true },
    { todoText: "mango", completed: false },
    { todoText: "orange", completed: true },
  ]);

  const onClickHandler = (element: any) => {
    // console.log("my Element", element)

    const newTodos = todos.map((todo) => {
      // console.log("todo: ", todo)
      if (todo.todoText == element.todoText) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    console.log(newTodos)
    setTodos(newTodos)
  }

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = todos.concat(newTodo);
    setTodos(newTodos);
    setTodo('');
  };

  const deleteTodo = (dltTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == dltTodo.todoText) return false;
      return true;
    });
    // console.log("porana todos", todos, "naya todos", newTodos);
    setTodos(newTodos);
  };

  return (
    <main className="mt-20 md:mx-96 mx-5">
  <div className="bg-slate-200 rounded-xl py-4 px-4">
    <div className="bg-pink-200 rounded-xl py-4 px-4">
      <h1 className="text-3xl text-slate-500 text-center font-extrabold">
        To-Do List
      </h1>
    </div>

    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-2 mt-10 justify-center">
      <input
        className="flex-1 md:w-72 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
        placeholder="add todo text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="bg-slate-500 hover:bg-black text-white px-4 md:px-6 py-2 rounded-full" onClick={addTodo}>
        Add Task
      </button>
    </div>

    <div className="mt-4">
      <ul>
        {todos.map((elm) => {
          return (
            <li
              className="flex items-center justify-between py-2 border-b border-gray-300"
              style={{
                color: elm.completed ? "green" : "black",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              <button
                className="text-red-600 hover:text-red-800 ml-2" onClick={() => { deleteTodo(elm) }}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
</main>

  );
}

export default Todo


