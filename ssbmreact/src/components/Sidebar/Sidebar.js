import React, { Component } from 'react'
import styles from './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>

      <div className={styles.checkBoxContainer}>
      <h5 className={styles.title}>Game</h5>
      <ul className={styles.list}>
          <li className={styles.item}>
              <label className={styles.label} for="singles">
                  <input type="checkbox" value="singles" id="singles"/>
                  <span className={styles.labelSpan}>Super Smash Bros Melee</span>
              </label>
          </li>
          <li className={styles.item}>
          <label className={styles.label} for="doubles">
              <input type="checkbox" value="doubles" id="doubles"/>
              <span className={styles.labelSpan}>Super Smash Bros Brawl</span>
          </label>
      </li>
      <li className={styles.item}>
      <label className={styles.label} for="doubles">
          <input type="checkbox" value="doubles" id="doubles"/>
          <span className={styles.labelSpan}>Super Smash Bros 4</span>
      </label>
  </li>
  <li className={styles.item}>
  <label className={styles.label} for="doubles">
      <input type="checkbox" value="doubles" id="doubles"/>
      <span className={styles.labelSpan}>Super Smash Bros Ultimate</span>
  </label>
</li>
      </ul>
  </div>



            <div>
            <h5 className={styles.title}>Something</h5>
            <div className={styles.pricingContainer}>
                <span className={styles.sign}>$</span>
                <input className={styles.pricingInput} type="number"/>
                <span className={styles.to}>to</span>
                <span className={styles.sign}>$</span>
                <input className={styles.pricingInput} type="number"/>
                <button className={styles.priceBtn} type="submit"> > </button>
            </div>
            </div>

            <div className={styles.checkBoxContainer}>
                <h5 className={styles.title}>Something</h5>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <label className={styles.label} for="singles">
                            <input type="checkbox" value="singles" id="singles"/>
                            <span className={styles.labelSpan}>Singles</span>
                        </label>
                    </li>
                    <li className={styles.item}>
                    <label className={styles.label} for="doubles">
                        <input type="checkbox" value="doubles" id="doubles"/>
                        <span className={styles.labelSpan}>Doubles</span>
                    </label>
                </li>
                </ul>
            </div>
            <div className={styles.checkBoxContainer}>
            <h5 className={styles.title}>Seller Rank</h5>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <label className={styles.label} for="singles">
                        <input type="checkbox" value="singles" id="singles"/>
                        <span className={styles.labelSpan}>Medium</span>
                    </label>
                </li>
                <li className={styles.item}>
                <label className={styles.label} for="doubles">
                    <input type="checkbox" value="doubles" id="doubles"/>
                    <span className={styles.labelSpan}>Pro</span>
                </label>
            </li>
            </ul>
        </div>
            <div className={styles.checkBoxContainer}>
            <h5 className={styles.title}>Availability</h5>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <label className={styles.label} for="singles">
                        <input type="checkbox" value="singles" id="singles"/>
                        <span className={styles.labelSpan}>Part Time</span>
                    </label>
                </li>
                <li className={styles.item}>
                <label className={styles.label} for="doubles">
                    <input type="checkbox" value="doubles" id="doubles"/>
                    <span className={styles.labelSpan}>Full Time</span>
                </label>
            </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar;