import React from 'react';
import styles from './Pagination.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';



const pagination = (props) => {

    console.log(props);

    let numbers = [];
    let maxCount = Math.ceil(props.count / 12);
    for(let i=1; i<=maxCount; i++){
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
            <div className={styles.number} onClick={props.fetchPosts(props.page - 1)}>
                <IconContext.Provider value={{color: '#373737', size: '1rem'}}>
                <div>
                    <FaArrowLeft/>
                </div>
                </IconContext.Provider>
            </div>
        }

            {numbers}
            {props.page !== maxCount ?
            <div className={styles.number} onClick={() => props.fetchPosts(props.page + 1)}>
                <IconContext.Provider value={{color: '#373737', size: '1rem'}}>
                <div>
                    <FaArrowRight/>
                </div>
                </IconContext.Provider>
            </div>
            :null
            }
            </div>
        </div>
    )

};

export default pagination;