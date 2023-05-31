const TodoComputed = ({ computedItemsLeft, cleaarComplete }) => {
   return (
      <section className="flex justify-between rounded-b-md px-4 py-4 transition-all duration-1000 dark:bg-gray-800 dark:text-gray-400">
         <span className="text-gray-400">{computedItemsLeft}Items left</span>
         <button className="text-gray-400" onClick={cleaarComplete}>
            Clear completed
         </button>
      </section>
   );
};

export default TodoComputed;
