import React, { Component } from 'react'
import styles from './Navigation.css';


class BrowseNavigation extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <span className={styles.title}>Game</span>
                    <select className={styles.select} onChange={(e) => this.props.sortByGame(e.target.value) }>
                        <option>Fortnite</option>
                        <option>World of Warcraft</option>
                        <option>Overwatch</option>
                        <option>League of Legends</option>
                        <option>Gears of War</option>
                        <option>Runescape</option>
                    </select>
                </div>
                <div className={styles.item}>
                <span className={styles.title}>Pricing</span>
                <div>
                <select className={styles.pricingSelect}>
                    <option>Free</option>
                    <option>5$</option>
                    <option>10$</option>
                    <option>15$</option>               
                    <option>20$</option>
                    <option>25$</option>
                    <option>30$</option>
                    <option>35$</option>
                    <option>40$</option>
                    <option>45$</option>
                    <option>50$</option>
                </select>
                <select className={styles.pricingSelect}>
                <option>Free</option>
                <option>5$</option>
                <option>10$</option>
                <option>15$</option>               
                <option>20$</option>
                <option>25$</option>
                <option>30$</option>
                <option>35$</option>
                <option>40$</option>
                <option>45$</option>
                <option>50$</option>
            </select>
            </div>
            </div> 
            
            <div className={styles.item}>
            <span className={styles.title}>Location</span>
            <select className={styles.select}>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>United States</option>
            </select>
        </div>            


        <div className={styles.item}>
        <span className={styles.title}>Sort By</span>
        <select className={styles.select}>
            <option>Relevance</option>
            <option>Recommended</option>
            <option>Highest Price</option>
            <option>Lowest Price</option>
            <option>Ratings</option>
        </select>
    </div>            



            </div>
      </div>
    )
  }
}

export default BrowseNavigation;

