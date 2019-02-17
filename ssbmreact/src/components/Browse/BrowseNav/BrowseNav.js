import React, { Component } from 'react'
import styles from './BrowseNav.css';

class BrowseNav extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
            <span>Sort By:</span>
            <div>Recommended</div>
        </div>
      </div>
    )
  }
}

export default BrowseNav;