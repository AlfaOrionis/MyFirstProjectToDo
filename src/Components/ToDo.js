import styles from "./ToDo.module.css";

const ToDo = (props) => {
  const taskDoneHandler = () => {
    props.onRemove(props.id);
  };

  return (
    <li className={styles.li}>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div>
        <h2>{props.date}</h2>
        <h2>{props.time}</h2>
        <button onClick={taskDoneHandler}> DONE!</button>
      </div>
    </li>
  );
};

export default ToDo;
