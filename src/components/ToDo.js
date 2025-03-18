import React from "react";

function ToDo({text}) {
  return (
    <li>
      {text} <button>DEL</button>
    </li>
  );
}

export default ToDo;