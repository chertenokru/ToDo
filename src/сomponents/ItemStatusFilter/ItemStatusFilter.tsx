import { Component } from "react";
import "./ItemStatusFilter.css";

type Props = {
  onStatusFilterChanged: (type: string) => void;
  statusFilter: string;
};

export class ItemStatusFilter extends Component<Props> {
  render() {
    const { onStatusFilterChanged, statusFilter } = this.props;
    const activeClassName = "btn btn-info";
    const nonActiveClassName = "btn btn-outline-secondary";
    return (
      <div className="btn-group">
        <button
          type="button"
          className={
            statusFilter === "All" ? activeClassName : nonActiveClassName
          }
          onClick={() => onStatusFilterChanged("All")}
        >
          All
        </button>
        <button
          type="button"
          className={
            statusFilter === "Active" ? activeClassName : nonActiveClassName
          }
          onClick={() => onStatusFilterChanged("Active")}
        >
          Active
        </button>
        <button
          type="button"
          className={
            statusFilter === "Done" ? activeClassName : nonActiveClassName
          }
          onClick={() => onStatusFilterChanged("Done")}
        >
          Done
        </button>
      </div>
    );
  }
}
