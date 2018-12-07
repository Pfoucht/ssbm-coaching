import React, { Component } from 'react'
import styles from './Search.css';
import ColumnCard from '../ColumnCard/ColumnCard';
import Pagination from '../Browse/Pagination/Pagination';
import Navigation from '../Browse/Navigation/Navigation';

class Search extends Component {

    state = {

    }


    render(){

        return (
                <div className={styles.wrapper}>
                <Navigation/>

                <div className={styles.container}>
                    <div className={styles.row}>
                        <ColumnCard/>
                        <ColumnCard/>
                        <ColumnCard/>
                        <ColumnCard/>
                        <ColumnCard/>
                        <Pagination count={40}/>
                    </div>
                </div>
                </div>

            )


    }
}

export default Search;