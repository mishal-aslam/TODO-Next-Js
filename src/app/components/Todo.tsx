import React from 'react';


const Todo = () => {
  
  return (
    <>
      <main className='mt-20 md:mx-96 mx-5'>
        <div className="bg-pink-200 rounded-xl py-4 px-4">
          <h1 className="text-3xl text-slate-500 text-center font-extrabold">
            To-Do List
          </h1>
        </div>
        <div className="flex items-center space-x-2 mt-10 justify-center">
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 w-72"
            placeholder="What do you need to do??"
          />
          <button className="bg-slate-500 hover:bg-black text-white px-4 md:px-6 py-2 rounded-full">
            Add Task
          </button>
        </div>
        <div className="mt-4">
          <ul>
            <li className="flex items-center justify-between py-2 border-b border-gray-300">
              <span>Task 1</span>
              <button className="text-red-600 hover:text-red-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Todo;
