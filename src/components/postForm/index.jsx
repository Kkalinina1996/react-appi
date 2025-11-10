import React, { useState } from "react";
import styles from "./styles.module.css";
import Post from "../post";


const initialPosts = [
  { id: 1, title: "Заголовок", text: "текст поста" },
  { id: 2, title: "Заголовок", text: "текст поста" },
  { id: 3, title: "Заголовок", text: "текст поста" },
];

const PostList = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Список постов</h2>

      <div className={styles.list}>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            text={post.text}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <button className={styles.more}>Далее</button>
    </section>
  );
};

export default PostList;
