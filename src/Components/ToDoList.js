import ToDo from "./ToDo";
import { useEffect } from "react";

import Modal from "../Layout/Modal";
import { useState } from "react/cjs/react.development";

const ToDoList = (props) => {
  const [tasksToDo, setTasksToDo] = useState([]);
  useEffect(() => {
    if (props.passedTask) {
      setTasksToDo((prevState) => [...prevState, props.passedTask]);
      console.log(props.passedTask);
    }
  }, [props.passedTask]);

  const filtering = (id) => {
    const index = tasksToDo.findIndex((task) => task.id === id);
    let coppiedTasks = [...tasksToDo];
    const removedOne = { ...coppiedTasks[index], done: true };
    console.log(removedOne);

    coppiedTasks[index] = removedOne;

    setTasksToDo(coppiedTasks);

    props.onProp(coppiedTasks);

    console.log(tasksToDo);
  };

  const Todosfiltered = tasksToDo.filter((task) => task.done === false);

  const ToDos = Todosfiltered.map((item) => (
    <ToDo
      onRemove={filtering}
      id={item.id}
      key={item.id}
      name={item.name}
      date={item.date}
      time={item.time}
    />
  ));

  return (
    <Modal>
      <ul>{ToDos}</ul>
    </Modal>
  );
};

export default ToDoList;
