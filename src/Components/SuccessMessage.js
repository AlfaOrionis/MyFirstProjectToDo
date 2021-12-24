import styles from "./Message.module.css";

const SuccessMessage = () => {
  return (
    <>
      <div className={styles.background}></div>
      <div className={`${styles.modal} ${styles.success} ${styles.active}`}>
        <h2>Task added succesfully !</h2>
      </div>
    </>
  );
};

export default SuccessMessage;
