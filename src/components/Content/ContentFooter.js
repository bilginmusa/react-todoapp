import React, { useContext } from "react";

import TodoContext from "../../contexts/TodoContext";

function ContentFooter() {
  const { todos, activeFilter, setActiveFilter, setTodos } = useContext(
    TodoContext
  );

  const todoLeft = todos.filter((todo) => !todo.completed);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  return (
    <footer hidden={todos.length === 0} className="footer">
      {/* <meta property="todoDone" content="22" /> */}

      <span className="todo-count">
        <strong mv-value="todoLeft">{todoLeft.length} </strong>
        {todoLeft.length === 1 ? "item" : "items"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="/#"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => setActiveFilter("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => setActiveFilter("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => setActiveFilter("completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
