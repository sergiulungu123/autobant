import React from 'react';
import styles from './Loading.module.css';

const LoadingAnimation = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingAnimation;
