import { Component } from "react";
import { Item } from "../TodoTypes";
import "./TodoListItem.css";

type State = {
  done: boolean;
  important: boolean;
};

type Props = {
  item: Item;
  onDeleteItem: (id: number) => any;
};

export class TodoListItem extends Component<Props, State> {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState((prevState) => {
      return { done: !prevState.done };
    });
  };
  onButtonImportantClick = () => {
    this.setState((prevState) => {
      return {
        important: !prevState.important,
      };
    });
  };

  render() {
    const {
      item: { label, id },
      onDeleteItem,
    } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) classNames += " done";
    if (important) classNames += " important";
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-end"
          onClick={this.onButtonImportantClick}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-end"
          onClick={() => {
            onDeleteItem(id);
          }}
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </span>
    );
  }
}
