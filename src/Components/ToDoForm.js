import styles from "./ToDoForm.module.css";

import Modal from "../Layout/Modal";

import { useRef } from "react/cjs/react.development";
import { useState } from "react";
import LoadingSpinner from "../Layout/LoadingSpinner";

import SuccessMessage from "./SuccessMessage";

const ToDoForm = (props) => {
  const taskRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();

  const [isTaskInputValid, setIsTaskInputValid] = useState(true);
  const [isDateInputValid, setIsDateInputValid] = useState(true);
  const [istimeInputValid, setIsTimeInputValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [issuccess, setIsSuccess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const taskValue = taskRef.current.value;
    const dateValue = dateRef.current.value;
    const timeValue = timeRef.current.value;

    const taskCheck = taskValue.trim().length < 3;
    const dateCheck = dateValue === "";
    const timeCheck = timeValue === "";

    taskCheck && setIsTaskInputValid(false);
    dateCheck && setIsDateInputValid(false);
    timeCheck && setIsTimeInputValid(false);

    const validation = !taskCheck && !dateCheck && !timeCheck;

    if (!validation) {
      return;
    }

    const theTask = {
      name: taskValue,
      date: dateValue,
      time: timeValue,
    };

    taskRef.current.value = "";
    dateRef.current.value = "";
    timeRef.current.value = "";

    props.onPassingTheTask(theTask);
    //just playing with the animations here, might as well remove it
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      //i am reseting the validation after adding a task
      setIsTaskInputValid(true);
      setIsDateInputValid(true);
      setIsTimeInputValid(true);
    }, 400);

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 1600);
  };

  return (
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>Task: </label>
        <input
          onBlur={() => {
            setTimeout(() => {
              taskRef.current.value.trim().length < 3 &&
                setIsTaskInputValid(false);
            }, 200);
          }}
          onFocus={() =>
            setTimeout(() => {
              setIsTaskInputValid(true);
            }, 200)
          }
          ref={taskRef}
          placeholder="The task"
          type="text"
        />
        {!isTaskInputValid && (
          <p className={styles.message}>Minimum 3 characters required!</p>
        )}
        <label>Deadline: </label>
        <input
          onBlur={() => {
            setTimeout(() => {
              dateRef.current.value === "" && setIsDateInputValid(false);
            }, 200);
          }}
          onFocus={() =>
            setTimeout(() => {
              setIsDateInputValid(true);
            }, 200)
          }
          ref={dateRef}
          type="date"
          min={new Date().toISOString().slice(0, 10)}
        />
        {!isDateInputValid && <p className={styles.message}>Choose the date</p>}
        <input
          onBlur={() => {
            setTimeout(() => {
              timeRef.current.value === "" && setIsTimeInputValid(false);
            }, 200);
          }}
          onFocus={() =>
            setTimeout(() => {
              setIsTimeInputValid(true);
            }, 200)
          }
          ref={timeRef}
          className={styles.time}
          type="time"
        />
        {!istimeInputValid && <p className={styles.message}>Choose the time</p>}
        <button type="submit">Add task</button>
      </form>
      {isLoading && <LoadingSpinner />}
      {!isLoading && issuccess && <SuccessMessage />}
    </Modal>
  );
};

export default ToDoForm;
