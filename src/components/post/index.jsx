import React from "react";
import styles from "./styles.module.css";

/**
 * Tukšs taisnstūris kā Figma panelis.
 * Props (nav obligāti):
 *  - width, height: px vērtības (pēc noklusējuma 1043 x 887)
 */
const EmptyPanel = ({ width = 1043, height = 887 }) => {
  return (
    <div
      className={styles.panel}
      style={{ width: `${width}px`, height: `${height}px` }}
      aria-label="Empty panel"
    />
  );
};

export default EmptyPanel;
