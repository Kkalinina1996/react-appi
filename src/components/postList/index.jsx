import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../post";
import styles from "./styles.module.css";

const API = "https://691226cb52a60f10c820ce5c.mockapi.io/posts"; // ja vajag, nomaini

const PostList = ({ posts: externalPosts, onDelete: externalOnDelete }) => {
  const controlled = Array.isArray(externalPosts);
  const [posts, setPosts] = useState(controlled ? externalPosts : []);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // sinhronizē ar ārēji padotajiem posts (kontrolētais režīms)
  useEffect(() => {
    if (controlled) setPosts(externalPosts);
  }, [controlled, externalPosts]);

  // autonomais režīms: ielādē no API, ja posts nav padots no ārpuses
  const fetchPage = async (p = 1) => {
    try {
      setLoading(true);
      setErr("");
      const { data } = await axios.get(`${API}?page=${p}&limit=3`);
      setPosts(prev => (p === 1 ? data : [...prev, ...data]));
    } catch (e) {
      setErr("Не удалось загрузить посты");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!controlled) fetchPage(1);
  }, [controlled]);

  const handleDelete = async (id) => {
    if (controlled) {
      // deleģē uz vecāku, ja padota onDelete
      externalOnDelete?.(id);
      return;
    }
    try {
      await axios.delete(`${API}/${id}`);
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (e) {
      console.error(e);
      alert("Ошибка при удалении");
    }
  };

  const loadMore = () => {
    const next = page + 1;
    setPage(next);
    if (!controlled) fetchPage(next);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Список постов</h2>

      {err && <div className={styles.error}>{err}</div>}

      <ul className={styles.list}>
        {posts.map((p) => (
          <li key={p.id} className={styles.row}>
            <Post
              id={p.id}
              title={p.title || "Заголовок"}
              text={p.text || "текст поста"}
              onDelete={() => handleDelete(p.id)}
            />
          </li>
        ))}
      </ul>

      {!controlled && (
        <div className={styles.actions}>
          <button
            className={styles.more}
            onClick={loadMore}
            disabled={loading}
            type="button"
          >
            {loading ? "Загрузка…" : "Далее"}
          </button>
        </div>
      )}
    </section>
  );
};

export default PostList;
