import { Item } from "../TodoTypes";
import "./TodoListItem.css";

type Props = {
  item: Item;
  onDeleteItem: () => void;
  onImportantItemChange: () => void;
  onDoneItemChange: () => void;
};

export const TodoListItem = ({
  item: { label, done, important },
  onDeleteItem,
  onImportantItemChange,
  onDoneItemChange,
}: Props) => {
  let classNames = "todo-list-item";
  if (done) classNames += " done";
  if (important) classNames += " important";
  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onDoneItemChange}>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={onImportantItemChange}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={onDeleteItem}
      >
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </button>
    </span>
  );
};
