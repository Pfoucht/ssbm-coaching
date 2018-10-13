import React from 'react'
import styles from './Publish.css';

const publish = props => {
  return (
        <div className={styles.container}>
            <div className={styles.title2}>Publish</div>
            <div className={styles.content}>
                CONTENT ABOUT PUBLISHING!
            </div>
            <button className={styles.btn} onClick={props.publishGig}>Publish</button>

        </div>
  )
}

export default publish;