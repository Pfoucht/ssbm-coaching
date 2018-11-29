import React from 'react';
import styles from './Spinner.css';

const spinner = (props) => {
    return (
    <div className={styles.spinner}>
    <div className={styles.skFoldingCube}>
    <div className={[styles.skCube1, styles.skCube].join(' ')}></div>
    <div className={[styles.skCube2, styles.skCube].join(' ')}></div>
    <div className={[styles.skCube3, styles.skCube].join(' ')}></div>
    <div className={[styles.skCube4, styles.skCube].join(' ')}></div>
    </div>
    </div>
    )

};

export default spinner;