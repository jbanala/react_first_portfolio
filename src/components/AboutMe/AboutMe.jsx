import React from 'react'
import styles from "./AboutMe.module.css"; 
import { getImageUrl } from '../../utils';

export const AboutMe = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About Me
        </h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutMeImg.PNG")} 
                alt="Me sitting with laptop" 
                className={styles.aboutImg}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursorIcon.png")} 
                        alt="Cursor Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Completed Courses at SU</h3>
                        <p>
                            Programming and Problem Solving 1 & 2, Data Structures and Algorithms
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Aspiring Artist</h3>
                        <p>
                            As a hobby, I have experience in art from a young age and have skill in traditional and digital mediums. 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Objective</h3>
                        <p>
                        Looking for an opportunity to be a software developer or UI/UX designer.  
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  
  );
};
