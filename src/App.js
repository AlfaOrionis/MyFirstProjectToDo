import React from "react";
import ToDoForm from "./Components/ToDoForm";

import ToDoList from "./Components/ToDoList";

import styles from "./App.module.css";
import { useState } from "react/cjs/react.development";
import DoneList from "./Components/DoneList";

const App = () => {
  const [theTask, setTheTask] = useState();
  const [passingDoneTask, setPassingDoneTask] = useState();

  const passingTheTasksToDO = (passedTask) => {
    setTheTask(passedTask);
  };

  const passing = (doneTask) => {
    setPassingDoneTask(doneTask);
  };

  return (
    <React.Fragment>
      <div className={styles.form}>
        <ToDoForm onPassingTheTask={passingTheTasksToDO} />
      </div>

      <div className={styles.lists}>
        <ToDoList passedTask={theTask} onProp={passing} />
        <DoneList passingTheDoneTask={passingDoneTask} />
      </div>
      <h1 className="tittlefinally">FINALLY GET SH*T DONE</h1>
    </React.Fragment>
  );
};

export default App;
