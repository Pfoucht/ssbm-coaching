import React, { Component } from 'react'
import styles from './ManageGigs.css';


class ManageGigs extends Component {


  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
            <div>
                <nav className={styles.nav}>
                    <div>
                        <ul className={styles.list}>
                            <li lassName={styles.item}><span>checkbox</span></li>
                            <li className={styles.item}>Gig</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.list}>
                            <li className={styles.item}>Views</li>
                            <li className={styles.item}>Reviews</li>
                            <li className={styles.item}>Edit</li>
                            <li className={styles.item}>Delete</li>
                            <li className={styles.item}>More</li>
                        </ul>
                </div>
                </nav>
            </div>
        </div>
      </div>
    )
  }
}


export default ManageGigs;