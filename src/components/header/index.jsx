import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} aria-label="MECK home">
          <img src={logo} alt="" className={styles.logoIcon} />
         
        </a>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.menu}>
            <li><a className={styles.link} href="#">Главная</a></li>
            <li><a className={styles.link} href="#">Музыка</a></li>
            <li><a className={styles.link} href="#">Сообщества</a></li>
            <li><a className={styles.link} href="#">Друзья</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
