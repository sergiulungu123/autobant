import React from 'react';
import styles from './LoadingAnimation.module.css';

const LoadingAnimation = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingAnimation;
