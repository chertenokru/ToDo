import AppHeader from "./сomponents/AppHeader";
import ItemStatusFilter from "./сomponents/ItemStatusFilter";
import SearchPanel from "./сomponents/SearchPanel";
import TodoList from "./сomponents/Todo/TodoList";
import { ItemList } from "./сomponents/Todo/TodoTypes";
import "./App.css";

export const App = () => {
  const todoData: ItemList = [
    { label: "Drink Cofee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={6} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};
