import React, { Component } from 'react';
import styles from './Pagination.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { withRouter } from 'react-router-dom';


class Pagination extends Component {


    componentDidMount(){
        console.log(this.props);
    }

    fetchPageHandler = (page) => {
        this.props.history.push({
            search: '?page=' + page
        })

    }

    render(){
    let numbers = [];
    let maxCount = Math.ceil(this.props.count / 12);
    if(maxCount <= 1 || !maxCount){
        return null;
    }
    for(let i=1; i<=maxCount; i++){
        numbers.push(<div
             className={this.props.page == i ? styles.numberActive : styles.number}
             onClick={() => this.fetchPageHandler(i)}
             >
             {i}</div>)
    }
    return (
        <div className={styles.container}>
        <div className={styles.flex}>
            {this.props.page === 1 ?
                null
                :
            <div className={styles.number} onClick={() => this.fetchPageHandler(this.props.page - 1)}>
                <IconContext.Provider value={{color: '#373737', size: '1rem'}}>
                <div>
                    <FaArrowLeft/>
                </div>
                </IconContext.Provider>
            </div>
        }

            {numbers}
            {this.props.page !== maxCount ?
            <div className={styles.number} onClick={() => this.fetchPageHandler(this.props.page + 1)}>
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
        }
};

// onClick={() => this.props.fetchPosts(this.props.page + 1)}

export default withRouter(Pagination);