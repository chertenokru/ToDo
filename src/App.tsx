import AppHeader from "./сomponents/AppHeader";
import ItemStatusFilter from "./сomponents/ItemStatusFilter";
import SearchPanel from "./сomponents/SearchPanel";
import TodoList from "./сomponents/Todo/TodoList";
import { ItemList } from "./сomponents/Todo/TodoTypes";
import "./App.css";
import { Component } from "react";

type State = {
  todoData: ItemList;
};

export class App extends Component {
  state: State = {
    todoData: [
      { label: "Drink Cofee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 },
    ],
  };

  onDeliteItem = (id: number) => {
    //this.setState(this.state.todoData.)
    console.log(id);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={6} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleteItem={this.onDeliteItem}
        />
      </div>
    );
  }
}
