import AppHeader from "./сomponents/AppHeader";
import ItemStatusFilter from "./сomponents/ItemStatusFilter";
import SearchPanel from "./сomponents/SearchPanel";
import TodoList from "./сomponents/Todo/TodoList";
import { Item, ItemList } from "./сomponents/Todo/TodoTypes";
import "./App.css";
import { Component } from "react";
import AddItem from "./сomponents/Todo/AddItem";

type State = {
  todoData: ItemList;
  filter: string;
  statusFilter: string;
};

export class App extends Component<{}, State> {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Cofee"),
      this.createTodoItem("Make Awesome App", true),
      this.createTodoItem("Have a lunch", false, true),
    ],
    filter: "",
    statusFilter: "All",
  };

  createTodoItem(label: string, important = false, done = false): Item {
    return {
      label,
      important: important,
      id: this.maxId++,
      done: done,
    };
  }

  toggleProperty(arr: any[], id: number, propName: string): any[] {
    const itemIndex = arr.findIndex((i) => i.id === id);
    const newData: ItemList = [
      ...arr.slice(0, itemIndex),
      { ...arr[itemIndex], [propName]: !(arr[itemIndex][propName] as boolean) },
      ...arr.slice(itemIndex + 1),
    ];
    return newData;
  }

  onDeliteItem = (id: number) => {
    this.setState(({ todoData }) => {
      const itemIndex = todoData.findIndex((i) => i.id === id);
      const newData: ItemList = [
        ...todoData.slice(0, itemIndex),
        ...todoData.slice(itemIndex + 1),
      ];
      return { todoData: newData };
    });
  };

  OnAddItem = (text: string) => {
    this.setState(({ todoData }) => {
      //  const newData = todoData.slice(0);
      //  newData.push({ label: text, important: true, id: this.maxId++ });

      const newData = [...todoData, this.createTodoItem(text)];
      return { todoData: newData };
    });
  };

  onImportantItemChange = (id: number) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "important") };
    });
  };

  onDoneItemChange = (id: number) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") };
    });
  };

  onFilterChange = (filter: string) => {
    this.setState({ filter: filter });
  };

  onFilterStatusChange = (filter: string) => {
    this.setState({ statusFilter: filter });
  };

  filterStatus(items: ItemList, status: string): ItemList {
    if (status === "All") return items;
    const doneStatus = status === "Done";

    return items.filter((el) => el.done === doneStatus);
  }

  render() {
    const { todoData, filter, statusFilter } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    const statusFilteredTodo = this.filterStatus(todoData, statusFilter);

    const filteredTodo =
      filter.length > 0
        ? statusFilteredTodo.filter((el) =>
            el.label.toUpperCase().includes(filter.toUpperCase())
          )
        : statusFilteredTodo;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel filter={filter} onFilterChange={this.onFilterChange} />
          <ItemStatusFilter
            statusFilter={statusFilter}
            onStatusFilterChanged={this.onFilterStatusChange}
          />
        </div>
        <TodoList
          todos={filteredTodo}
          onDeleteItem={this.onDeliteItem}
          onImportantItemChange={this.onImportantItemChange}
          onDoneItemChange={this.onDoneItemChange}
        />
        <AddItem onAddItem={this.OnAddItem} />
      </div>
    );
  }
}
