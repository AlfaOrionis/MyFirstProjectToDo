import React from "react";
import ToDoForm from "./Components/ToDoForm";

import ToDoList from "./Components/ToDoList";

import styles from "./App.module.css";
import { useState } from "react/cjs/react.development";

const App = () => {
  const [theTask, setTheTask] = useState();

  const passingTheTask = (props) => {
    setTheTask(props);
  };

  return (
    <React.Fragment>
      <div className={styles.form}>
        <ToDoForm onPassingTheTask={passingTheTask} />
      </div>

      <div className={styles.lists}>
        <ToDoList passedTask={theTask} />
      </div>
      <h1 className="tittlefinally">FINALLY GET SH*T DONE</h1>
    </React.Fragment>
  );
};

export default App;
