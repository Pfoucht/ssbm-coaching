import React from 'react';
import styles from './OtherCoaches.css';
import Card from '../Card/Card';

const otherCoaches = props => {

    let coaches = null;

    if(props.coaches && props.coaches.length > 0){
        coaches = props.coaches.map(el => {
            return <Card el={el}/>
        })
    }

    return (

    
        <div className={styles.container}>
            <h2 className={styles.title}>Recommended Coaches</h2>
            <div className={styles.flexbox}>
                {coaches}
            </div>
        </div>
    );
};

export default otherCoaches;