import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";

const initialStateTodos = [
   { id: 1, title: "Complete online javascript", completed: true },
   { id: 2, title: "10 minutos de meditacion", completed: false },
   { id: 3, title: "Go to the Gym", completed: false },
   { id: 4, title: "Pickup up grocerias", completed: false },
   { id: 5, title: "Complete todo app on Frontend Mentor", completed: false },
];

// const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
   const [todos, setTodos] = useState(initialStateTodos);

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   const createTodo = (title) => {
      const newTodo = {
         id: Date.now(),
         title,
         completed: false,
      };

      setTodos([...todos, newTodo]);
   };

   const updateTodo = (id) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
         )
      );
   };

   const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

   const cleaarComplete = () => {
      setTodos(todos.filter((todo) => !todo.completed));
   };

   const [filter, setFilter] = useState("all");

   const changeFilter = (filter) => setFilter(filter);

   const filteredTodos = () => {
      switch (filter) {
         case "all":
            return todos;
         case "active":
            return todos.filter((todo) => !todo.completed);
         case "completed":
            return todos.filter((todo) => todo.completed);
         default:
            return todos;
      }
   };

   return (
      <div
         className="md:dark-bg-[url('./assets/images/bg-desktop-dark.jpg')] min-h-screen bg-gray-300
     bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all 
     duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
     md:bg-[url('./assets/images/bg-desktop-light.jpg')]"
      >
         <Header />

         <main className="container mx-auto mt-8 px-4 md:max-w-xl">
            <TodoCreate createTodo={createTodo} />
            <TodoList
               todos={filteredTodos()}
               removeTodo={removeTodo}
               updateTodo={updateTodo}
            />
            <TodoComputed
               computedItemsLeft={computedItemsLeft}
               cleaarComplete={cleaarComplete}
            />
            <TodoFilter changeFilter={changeFilter} filter={filter} />
            <Footer />
         </main>
      </div>
   );
};

export default App;
