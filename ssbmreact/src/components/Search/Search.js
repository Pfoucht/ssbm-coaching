import React, { Component } from 'react'
import styles from './Search.css';
import ColumnCard from '../ColumnCard/ColumnCard';
import Pagination from '../Browse/Pagination/Pagination';
import Navigation from '../Browse/Navigation/Navigation';
import NoPostsFound from './NoPostsFound/NoPostsFound';

class Search extends Component {

    state = {
        postsExists: true
    }


    render(){

        let cards = null;
        if(this.props.posts && this.props.posts.length > 0){
            cards = this.props.posts.map((el) => {
                return <ColumnCard el={el}/>
            });
        }

        let inside = (
            <div>
                <Navigation/>
                <div className={styles.container}>
                    <div className={styles.row}>
                        {cards}
                        <Pagination count={40}/>
                    </div>
                </div>
            </div>
        );
        if(this.props.posts && this.props.posts.length === 0){
            inside = <NoPostsFound/>
        }

        

        return (
                <div className={styles.wrapper}>
                    {inside}
                </div>
            )


    }
}

export default Search;