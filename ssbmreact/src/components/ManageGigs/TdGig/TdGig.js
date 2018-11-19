
import React from 'react'
import {FiEdit, FiDelete, FiMoreVertical} from 'react-icons/fi';
import { IoIosClock } from 'react-icons/io';
import { IconContext } from 'react-icons';

import styles from './TdGig.css';

const tdGig = props => (
    <tr className={styles.tr}>
    <td className={styles.td}>
         <span className={styles.square}></span>
    </td>
    <td className={styles.td}>
    <img src="https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/113858669/original/7684343f42bd5a556cf69c60af8e46d358d70754/design-and-create-a-responsive-website-for-free.png" alt="gig coverphoto"/>
    </td>
    <td className={styles.td}>
         <span>I will be your fortnite coach</span>
     </td>
      <td className={styles.td}>
         322
      </td>
      <td className={styles.td}>
         20
      </td>
      <td className={styles.td}>
      <span className={styles.icon}>
      <IconContext.Provider value={{color: '#222', size: '1.25rem'}}>
      <div>
          <FiEdit/>
      </div>
      </IconContext.Provider> 
  </span>
     </td>
     <td className={styles.td}>
     <span className={styles.icon}>
     <IconContext.Provider value={{color: '#222', size: '1.25rem'}}>
     <div>
         <FiDelete/>
     </div>
     </IconContext.Provider> 
 </span>
     </td>
     <td className={styles.td}>
     <span className={styles.icon}>
     <IconContext.Provider value={{color: '#222', size: '1.25rem'}}>
     <div>
         <FiMoreVertical/>
     </div>
     </IconContext.Provider> 
 </span>
     </td>
 </tr>   
)


export default tdGig;