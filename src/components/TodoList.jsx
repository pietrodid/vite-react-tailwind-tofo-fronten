import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
   return (
      <section className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4">
         {todos.map((todo) => (
            <TodoItem
               key={todo.id}
               todo={todo}
               removeTodo={removeTodo}
               updateTodo={updateTodo}
            />
         ))}
      </section>
   );
};

export default TodoList;
