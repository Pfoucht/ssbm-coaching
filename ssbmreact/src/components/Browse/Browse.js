import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Browse.css';
import {FaHeart} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import Card from './Card/Card';
import BrowseNavigation from './Navigation/Navigation';
import Pagination from './Pagination/Pagination';
import Spinner from '../UI/Spinner/Spinner';
import Sidebar from '../Sidebar/Sidebar';
import BrowseNav from './BrowseNav/BrowseNav';



class Browse extends Component {

    componentDidMount(){
        console.log(this.props);
    }

    render() {
        let cards = null;
        if(this.props.loading){
            cards = <Spinner/>
        }
        if(this.props.loading){
            cards = <Spinner/>
        }
        if(this.props.posts && this.props.posts.length > 0){
            cards = this.props.posts.map(el => {
                return <Card el={el} />
            })
        };
        
        return (
            <div>
                <section className={styles.browseContainer}> 
                    <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Super Smash Bros Melee</h1>
                    <p className={styles.p}>Learn from the best</p>
                    </div>
                    <BrowseNavigation
                    hi="hi"
                    sortByFilters={this.props.sortByFilters}
                    sortByGame={this.props.sortByGame}
                    />
                    <div className={styles.container}>

                    <div className={styles.flex}>
                    {cards}
                    </div>
                        <Pagination 
                            prevPage={this.props.prevPage} 
                            nextPage={this.props.nextPage} 
                            count={this.props.count} 
                            fetchPosts={this.props.fetchPosts} 
                            page={this.props.page}
                            />
                    </div>
                </section>
            </div>
        )
    }
}

// <h4 className={styles.flexHeader}>
// Melee Coaches
// </h4>

// <BrowseNavigation
// sortByGame={this.props.sortByGame}
// />

export default Browse;

// <div className={styles.flex}>
// <Sidebar/>
// {cards}
// </div>