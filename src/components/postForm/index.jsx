import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./styles.module.css";
import userIcon from "../../assets/user-icon.svg"; // ja nav, var izlaist <img>

const API = "https://691226cb52a60f10c820ce5c.mockapi.io/posts"; // nomaini, ja vajag

const PostForm = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm({
    defaultValues: { title: "", content: "" }
  });

  const onSubmit = async (data) => {
    await axios.post(API, { title: data.title, text: data.content });
    reset();
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Написать пост</h2>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.avatar}>
            {/* Ja ir SVG — rādām, ja nav, paliek aplis */}
            {userIcon && <img src={userIcon} alt="" aria-hidden className={styles.avatarImg} />}
          </div>
          
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label} htmlFor="title">Заголовок</label>
          <input
            id="title"
            type="text"
            className={`${styles.input} ${styles.underline}`}
            placeholder="Заголовок"
            {...register("title", { required: true })}
          />

          <label className={styles.label} htmlFor="content">Текст поста</label>
          <textarea
            id="content"
            className={`${styles.textarea} ${styles.underline}`}
            placeholder="Введите текст…"
            {...register("content", { required: true })}
          />

          <button type="submit" className={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Отправка…" : "Публикация"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostForm;
