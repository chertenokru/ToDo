import TodoListItem from "../TodoListItem";
import { ItemList } from "../TodoTypes";
import "./TodoList.css";

type Props = {
  todos: ItemList;
};

export const TodoList = ({ todos }: Props) => {
  const items = todos.map((item) => (
    <li key={item.id} className="list-group-item">
      <TodoListItem {...item} />
    </li>
  ));
  return <ul className="list-group todo-list">{items}</ul>;
};
