import ToDo from "./ToDo";
import { useEffect } from "react";

import Modal from "../Layout/Modal";
import { useState } from "react/cjs/react.development";

const ToDoList = (props) => {
  const [fetchedTasks, setFetchedTasks] = useState([]);
  useEffect(() => {
    if (props.passedTask) {
      setFetchedTasks((prevState) => [props.passedTask, ...prevState]);
    }
  }, [props.passedTask]);

  const filtering = (name) => {
    const filteredTasks = fetchedTasks.filter((task) => task.name !== name);

    setFetchedTasks(filteredTasks);
  };

  const ToDos = fetchedTasks.map((item) => (
    <ToDo
      onRemove={filtering}
      key={Math.random().toString()}
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
