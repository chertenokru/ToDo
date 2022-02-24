import React, { Component } from "react";
import "./AddItem.css";

type Props = {
  onAddItem: (text: string) => void;
};
export class AddItem extends Component<Props> {
  state = {
    label: "",
  };

  onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({ label: "" });
  };

  render() {
    return (
      <form className="AddItem d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control "
          onChange={this.onLabelChange}
          placeholder="Whan need to be done"
          value={this.state.label}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary btn-sm float-end w-25"
        >
          Add Item
        </button>
      </form>
    );
  }
}
