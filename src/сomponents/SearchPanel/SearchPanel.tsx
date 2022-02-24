import React, { Component } from "react";
import "./SearchPanel.css";

type Props = {
  filter: string;
  onFilterChange(filter: string): void;
};
export class SearchPanel extends Component<Props> {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to seacrch"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onFilterChange(e.target.value)
        }
      />
    );
  }
}
