'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './MatrixHeader.module.scss';

const MatrixHeader = () => {
  const [matrixEffect, setMatrixEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatrixEffect(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();

  return (
    <header className={`${styles.matrixHeader} ${matrixEffect ? styles.matrixEffect : ''}`}>
      <nav className={styles.matrixNav}>
        <button 
          onClick={() => router.push('/about')}
          className={styles.matrixLink}
        >
          <span className={styles.underline}>About</span>
        </button>
        <button 
          onClick={() => router.push('/blog')}
          className={styles.matrixLink}
        >
          <span className={styles.underline}>Blog</span>
        </button>
        <button 
          onClick={() => router.push('/projects')}
          className={styles.matrixLink}
        >
          <span className={styles.underline}>Projects</span>
        </button>
      </nav>
    </header>
  );
};

export default MatrixHeader;
