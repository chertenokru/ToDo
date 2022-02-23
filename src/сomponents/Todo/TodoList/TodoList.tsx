import TodoListItem from "../TodoListItem";
import { ItemList } from "../TodoTypes";
import "./TodoList.css";

type Props = {
  todos: ItemList;
  onDeleteItem: (id: number) => any;
};

export const TodoList = ({ todos, onDeleteItem }: Props) => {
  const items = todos.map((item) => (
    <li key={item.id} className="list-group-item">
      <TodoListItem item={item} onDeleteItem={onDeleteItem} />
    </li>
  ));
  return <ul className="list-group todo-list">{items}</ul>;
};
