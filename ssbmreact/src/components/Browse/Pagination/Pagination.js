import React from 'react';
import styles from './Pagination.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';



const pagination = (props) => {

    let numbers = []
    for(let i=1; i<=6; i++){
        numbers.push(<div
             className={props.page == i ? styles.numberActive : styles.number}
             onClick={() => props.fetchPosts(i)}
             >
             {i}</div>)
    }
    return (
        <div className={styles.container}>
        <div className={styles.flex}>
            {props.page === 1 ?
                null
                :
            <div className={styles.number}>
                <IconContext.Provider value={{color: '#373737', size: '1rem'}}>
                <div>
                    <FaArrowLeft/>
                </div>
                </IconContext.Provider>
            </div>
        }

            <div></div>
            {numbers}
            <div className={styles.number}>
                <IconContext.Provider value={{color: '#373737', size: '1rem'}}>
                <div>
                    <FaArrowRight/>
                </div>
                </IconContext.Provider>
            </div>
            </div>
        </div>
    )

};

export default pagination;