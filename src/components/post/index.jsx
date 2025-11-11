import React from "react";
import styles from "./styles.module.css";

const Post = ({ id, title, text, onDelete }) => {
  return (
    <div className={styles.post}>
      {/* User info (kreisā puse) */}
      <div className={styles.colLeft}>
        <div className={styles.avatar}></div>
        <span className={styles.userName}>User logo</span>
      </div>

      {/* Content (vidus) */}
      <div className={styles.colCenter}>
        <h3 className={styles.title}>{title || "Заголовок"}</h3>
        <p className={styles.text}>{text || "текст поста"}</p>
      </div>

      {/* Info un poga (labā puse) */}
      <div className={styles.colRight}>
        <span className={styles.postId}>id поста {id || "—"}</span>
        <button className={styles.deleteBtn} onClick={onDelete}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Post;
