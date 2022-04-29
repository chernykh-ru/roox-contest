import React, { FC } from 'react';
import styles from './Spinner.module.css';

const Spinner: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
