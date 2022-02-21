import { Item } from "../TodoTypes";
import "./TodoListItem.css";

export const TodoListItem = ({ label, important = false }: Item) => {
  const style = {
    color: important ? "steelBlue" : "black",
    fontWeight: important ? "bold" : "normal",
  };
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-end">
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </button>
    </span>
  );
};
