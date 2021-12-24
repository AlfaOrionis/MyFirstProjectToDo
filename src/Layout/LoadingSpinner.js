import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.wrapper}>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
