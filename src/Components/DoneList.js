import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import Modal from "../Layout/Modal";
import ToDo from "./ToDo";

const DoneList = (props) => {
  const [theDoneTasks, setTheDoneTasks] = useState([]);

  useEffect(() => {
    console.log(props.passingTheDoneTask);
    if (props.passingTheDoneTask) {
      setTheDoneTasks((prevState) => [props.passingTheDoneTask, ...prevState]);
    }
  }, [props.passingTheDoneTask]);

  return (
    <Modal>
      {theDoneTasks.map((item) => (
        <ToDo
          name={item.name}
          key={item.id}
          id={item.id}
          date={item.date}
          time={item.time}
          done={true}
        />
      ))}
    </Modal>
  );
};

export default DoneList;
