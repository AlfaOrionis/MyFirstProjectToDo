import styles from "./ToDo.module.css";

const ToDo = (props) => {
  const rightNow = new Date().toLocaleString();

  const taskDoneHandler = () => {
    props.onRemove(props.id);
  };

  const taskDoneDeleteHandler = (e) => {
    const parent = e.target.parentNode;
    const grandParent = parent.parentNode;
    console.log(grandParent);
    grandParent.remove();
  };

  const doneInfo = (
    <div className={styles.doneInfo}>
      <h2>Done on:</h2>
      <p>{rightNow}</p>
    </div>
  );

  return (
    <li className={styles.li}>
      <div className={styles.nameOfTask}>
        <h1>{props.name}</h1>
      </div>
      <div>
        {!props.done && <h2 style={{ color: "red" }}>Deadline: </h2>}
        {!props.done && <p>{props.date}</p>}
        {!props.done && <p>{props.time}</p>}
        {props.done && doneInfo}
        {!props.done && <button onClick={taskDoneHandler}> DONE!</button>}
        {props.done && <button onClick={taskDoneDeleteHandler}> Delete</button>}

        {/* {props.done && <p>Done on 24.12.2012 13:53</p>} */}
      </div>
    </li>
  );
};

export default ToDo;
