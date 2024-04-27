import { TodoImage } from "./TodoImage";

export function TodoItem({ toggleTodo, deleteTodo, id, completed, title }) {
  function countCharacters(title) {
    if (title.length > 17) {
      title = title.substring(0, 14) + "...";
    }
    return title;
  }
  return (
    <li className="checkbox-container">
      <TodoImage />
      <label>
        <div>{countCharacters(title)}</div>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
      </label>
      <button
        className="btn btn-delete"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
