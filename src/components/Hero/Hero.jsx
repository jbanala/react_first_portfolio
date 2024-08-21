import React from 'react'; 
import styles from "./Hero.module.css"; 
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jaya</h1>
            <p className={styles.desc}>
              I’m currently a Computer Science major at Seattle University. 
              Reach out if you'd like to learn more!
            </p>
            <a href='mailto:jbanala99@gmail.com' className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
          src={getImageUrl("hero/meImg.PNG")} 
          alt='Image of me' 
          className={styles.heroImg}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  );
}; 
