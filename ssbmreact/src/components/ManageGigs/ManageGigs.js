import React, { Component } from 'react'
import styles from './ManageGigs.css';
import TdGig from './TdGig/TdGig';
class ManageGigs extends Component {


  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.th}>
                        <tr className={styles.list}>
                            <td lassName={styles.item}><span>checkbox</span></td>
                            <td className={styles.item} colspan="2">Gig</td>
                            <td className={styles.item}>Views</td>
                            <td className={styles.item}>Reviews</td>
                            <td className={styles.item}>Edit</td>
                            <td className={styles.item}>Delete</td>
                            <td className={styles.item}>More</td>
                        </tr>
                </thead>
                <tbody className={styles.tbodyni}>
                    <TdGig/>                   
                    <TdGig/>                   
                </tbody>
            </table>

        </div>
      </div>
    )
  }
}


export default ManageGigs;