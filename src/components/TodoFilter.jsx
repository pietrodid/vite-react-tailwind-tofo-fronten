const TodoFilter = ({ changeFilter, filter }) => {
   return (
      <section className="container mx-auto mt-8 transition-all duration-1000 dark:bg-gray-800 dark:text-gray-400">
         <div className="bgcham-white flex justify-center gap-4 rounded-md p-4">
            <button
               className={`${
                  filter === "all"
                     ? "text-blue-600 hover:text-gray-500"
                     : "text-gray-400 hover:text-blue-500"
               }`}
               onClick={() => changeFilter("all")}
            >
               All
            </button>
            <button
               className={`${
                  filter === "active"
                     ? "text-blue-600 hover:text-gray-500"
                     : "text-gray-400 hover:text-blue-500"
               }`}
               onClick={() => changeFilter("active")}
            >
               Active
            </button>
            <button
               className={`${
                  filter === "completed"
                     ? "text-blue-600 hover:text-gray-500"
                     : "text-gray-400 hover:text-blue-500"
               }`}
               onClick={() => changeFilter("completed")}
            >
               Completed
            </button>
         </div>
      </section>
   );
};

export default TodoFilter;
