import React from "react";

const Todos = props => {
  const { todo, handleDelete } = props;
  return (
    <div>
      <ul>
        {todo.map((tod, index) => (
          <li key={index}>
            {tod}
            <button className="close" onClick={() => handleDelete(tod)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todos;
