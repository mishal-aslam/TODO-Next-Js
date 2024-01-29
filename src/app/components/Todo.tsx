"use client";
import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([
    { todoText: "Exercise", completed: true },
    { todoText: "Orange Juice", completed: true },
    { todoText: "Read a Book", completed: false },
    { todoText: "Send Email", completed: true },
    { todoText: "Finish Assignment", completed: false },
    { todoText: "Buy Grocery", completed: false },
  ]);

  const onClickHandler = (element: any) => {
    // console.log("my Element", element)

    const newTodos = todoList.map((todo) => {
      // console.log("todo: ", todo)
      if (todo.todoText == element.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(newTodos);
    setTodolist(newTodos);
  };

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = todoList.concat(newTodo);
    setTodolist(newTodos);
    setTodo("");
  };

  const deleteTodo = (dltTodo: any) => {
    const newTodos = todoList.filter((todo) => {
      if (todo.todoText == dltTodo.todoText) return false;
      return true;
    });
    setTodolist(newTodos);
  };

  return (
    <div className="bg-purple-200 min-h-screen h-full">
    <main className=" md:mx-96 mx-5  pt-20">
      <div className="bg-slate-200 rounded-xl py-4 px-4">
        <div className="bg-[#ddbdea] rounded-xl py-4 px-4">
          <h1 className="text-3xl text-slate-500 text-center font-extrabold">
            To-Do List
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-2 mt-10 justify-center">
          <input
            className="flex-1 md:w-72 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[#ddbdea]"
            placeholder="Add Todo "
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            className="bg-slate-500 hover:bg-[#ddbdea] hover:text-slate-500 hover:font-semibold text-white px-4 md:px-6 py-2 rounded-full font-semibold"
            onClick={addTodo}
          >
            Add Task
          </button>
        </div>

        <div className="mt-4">
          <ul>
            {todoList.map((elm) => {
              return (
                <li
                  className="flex items-center justify-between py-2 border-b border-gray-300 font-semibold text-base"
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
                    className="text-red-600 hover:text-red-800 ml-2"
                    onClick={() => {
                      deleteTodo(elm);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
    </div>

  );
};

export default Todo;
