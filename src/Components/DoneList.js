import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import Modal from "../Layout/Modal";
import ToDo from "./ToDo";

const DoneList = (props) => {
  const [theDoneTasks, setTheDoneTasks] = useState([]);

  useEffect(() => {
    console.log(props.passingtasks);
    if (props.passingtasks) {
      const filteredTasks = props.passingtasks.filter(
        (task) => task.done === true
      );
      setTheDoneTasks(filteredTasks);
    }
  }, [props.passingtasks]);

  return (
    <Modal>
      {theDoneTasks.map((item) => (
        <ToDo name={item.name} key={item.id} />
      ))}
    </Modal>
  );
};

export default DoneList;
