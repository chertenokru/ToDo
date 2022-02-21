import "./AppHeader.css";
type Props = {
  toDo: number;
  done: number;
};
export const AppHeader = ({ toDo, done }: Props) => (
  <div className="app-header d-flex">
    <h1>Todo List</h1>
    <h2>
      {toDo} more to do, {done} done
    </h2>
  </div>
);
