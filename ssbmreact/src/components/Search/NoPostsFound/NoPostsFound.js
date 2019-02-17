import React from 'react'
import styles from './NoPostsFound.css';

const noPostsFound = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                <h2 className={styles.title}>Sorrry we found no posts for:<br/>Super smash bros hehdshaskdj</h2>
                </div>
                <div className={styles.div}>
                    Try adjusting your search. Here are some ideas:
                    <ul className={styles.list}>
                        <li className={styles.item}>Make sure all words are spelled correctly.</li>
                        <li className={styles.item}>Try different search terms.</li>
                        <li className={styles.item}>Try more general search terms.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default noPostsFound;