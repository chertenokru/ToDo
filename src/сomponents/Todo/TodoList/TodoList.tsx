import TodoListItem from "../TodoListItem";
import { ItemList } from "../TodoTypes";
import "./TodoList.css";

type Props = {
  todos: ItemList;
  onDeleteItem: (id: number) => void;
  onImportantItemChange: (id: number) => void;
  onDoneItemChange: (id: number) => void;
};

export const TodoList = ({
  todos,
  onDeleteItem,
  onImportantItemChange,
  onDoneItemChange,
}: Props) => {
  const items = todos.map((item) => (
    <li key={item.id} className="list-group-item">
      <TodoListItem
        item={item}
        onDeleteItem={() => onDeleteItem(item.id)}
        onImportantItemChange={() => onImportantItemChange(item.id)}
        onDoneItemChange={() => onDoneItemChange(item.id)}
      />
    </li>
  ));
  return <ul className="list-group todo-list">{items}</ul>;
};
