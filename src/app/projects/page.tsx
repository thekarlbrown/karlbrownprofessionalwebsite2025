import React from 'react';
import styles from './page.module.scss';

export default function ProjectsPage() {
  return (
    <div className={styles['projects-container']}>
      <h1>Projects</h1>
      <p className={styles['intro-text']}>
        I only write code that makes money, so I don&apos;t have many public projects to showcase. 
        Feel free to reach out if you want to learn more about what I&apos;ve been doing in the last few years.
      </p>

      <h2>Core Skillset</h2>
      <div className={styles['skills-grid']}>
        <div className={styles['skill-category']}>
          <h3>Front-End Development</h3>
          <ul>
            <li>Angular 2-19</li>
            <li>React</li>
            <li>NextJS</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>RxJS</li>
            <li>Redux/NgRx</li>
            <li>GraphQL</li>
            <li>REST</li>
          </ul>
        </div>

        <div className={styles['skill-category']}>
          <h3>Testing and Debugging</h3>
          <ul>
            <li>Karma/Jasmine</li>
            <li>Cypress</li>
            <li>Jest</li>
          </ul>
        </div>

        <div className={styles['skill-category']}>
          <h3>Backend and Deployment</h3>
          <ul>
            <li>NodeJS</li>
            <li>Python</li>
            <li>Bash</li>
            <li>SQL/MongoDB</li>
            <li>AWS</li>
            <li>Terraform</li>
            <li>Github Actions</li>
          </ul>
        </div>

        <div className={styles['skill-category']}>
          <h3>Styling and Design</h3>
          <ul>
            <li>CSS/SCSS/SASS</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className={styles['skill-category']}>
          <h3>Additional Proficiencies</h3>
          <ul>
            <li>Leadership</li>
            <li>Git</li>
            <li>Jira</li>
            <li>Agile methodologies</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
