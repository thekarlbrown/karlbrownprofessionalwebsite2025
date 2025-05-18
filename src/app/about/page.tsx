import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

export default function AboutPage() {
  return (
    <div className={styles['about-container']}>
      <div className={styles['profile-image']}>
        <Image
          src="/face.jpg"
          alt="Profile"
          unoptimized={true}
          width={200}
          height={200}
          className={styles['profile-image']}
        />
      </div>
      <h1>About</h1>
      <div className={styles['about-grid']}>
        <div className={styles['about-section']}>
          <h2>Education & Location</h2>
          <ul>
            <li>BS in Computer Science with 3.45 GPA</li>
            <li>Resident of Vienna, VA</li>
          </ul>
        </div>

        <div className={styles['about-section']}>
          <h2>Professional</h2>
          <ul>
            <li>Passionate about programming since childhood with over 10 years of experience</li>
            <li>Expert developer and leader who specializes in React, NextJS, and Angular</li>
          </ul>
        </div>

        <div className={styles['about-section']}>
          <h2>Interests</h2>
          <ul>
            <li>Tabletop Gamer</li>
            <li>Fly Fisher</li>
            <li>Magic: The Gathering player</li>
          </ul>
        </div>

        <div className={styles['about-section']}>
          <h2>Learn More</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/thekbrown">LinkedIn</a></li>
            <li><a href="Resume.pdf">Resume</a></li>
            <li><a href="mailto:karlbrownthinks@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
