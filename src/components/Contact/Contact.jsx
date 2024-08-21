import React from 'react'
import styles from "./Contact.module.css"; 
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>
                Feel free to reach out!
            </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:jbanala99@gmail.com">jbanala99@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkdIn Icon" />
                <a href="www.linkedin.com/in/jaya-banala">linkedin.com/in/jaya-banala</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/jbanala">github.com/jbanala</a>
            </li>
        </ul>
    </footer>
  );
};
