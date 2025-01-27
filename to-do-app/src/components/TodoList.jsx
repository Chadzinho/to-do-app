import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;

  const tab = "Completed";
  const filterTodosList =
    tab === "All"
      ? todos
      : todos === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo} />;
      })}
    </>
  );
}
