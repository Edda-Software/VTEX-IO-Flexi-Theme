import React from "react";
import styles from "./styles.css";

const Loader = () => {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.map}></div>
      <div className={styles.marker}></div>
    </div>
  );
};

export default Loader;
