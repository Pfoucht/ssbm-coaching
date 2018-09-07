import React from 'react';
import styles from './HeadingThick.css';

const headingThick = props => (
        <h1 className={styles.headingThick}>{props.children}</h1>
)

export default headingThick;