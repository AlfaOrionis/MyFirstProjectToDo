import React from "react";
import ToDoForm from "./Components/ToDoForm";

import ToDoList from "./Components/ToDoList";

import styles from "./App.module.css";
import { useState } from "react/cjs/react.development";
import DoneList from "./Components/DoneList";

const App = () => {
  const [theTask, setTheTask] = useState();
  const [passingTasks, setPassingTasks] = useState();

  const passingTheTasksToDO = (passedTask) => {
    setTheTask(passedTask);
  };

  const passing = (propss) => {
    setPassingTasks(propss);
    console.log(propss);
  };

  return (
    <React.Fragment>
      <div className={styles.form}>
        <ToDoForm onPassingTheTask={passingTheTasksToDO} />
      </div>

      <div className={styles.lists}>
        <ToDoList passedTask={theTask} onProp={passing} />
        <DoneList passingtasks={passingTasks} />
      </div>
      <h1 className="tittlefinally">FINALLY GET SH*T DONE</h1>
    </React.Fragment>
  );
};

export default App;
