import React, { Component } from 'react'
import styles from './Navigation.css';
import Dropdown from '../../UI/Dropdown/Dropdown';
import { FaStar} from 'react-icons/fa';
import { IconContext } from 'react-icons';


class BrowseNavigation extends Component {

    componentDidMount(){
        console.log(this.props);
    }

state = {
    minValue: 0,
    maxValue: 100,
    location: null,
    games: [
        {
            id: 0,
            title: 'Super Smash Bros 64',
            selected: false
        },
        {
            id: 1,
            title: 'Super Smash Bros Melee',
            selected: false
        },
        {
            id: 2,
            title: 'Super Smash Bros Brawl',
            selected: false  
        },
        {
            id: 3,
            title: 'Super Smash Bros 4',
            selected: false  
        },
        {
            id: 4,
            title: 'Super Smash Bros Ultimate',
            selected: false  
        }
    ],
    gameValue: null,
    ratings: [
        {
            id: 1,
            title: '4.0 & up',
            value: 4,
            html:          (<IconContext.Provider value={{color: '#fcc02e', size: '.85rem'}}>
                                <span onClick={() => alert('testing')}>
                                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar color="#aaa"/>
                                </span>
                            </IconContext.Provider>)
        },
        {
            id: 2,
            value: 3,
            title: '3.0 & up',
            html:          (<IconContext.Provider value={{color: '#fcc02e', size: '.85rem'}}>
                                <span>
                                    <FaStar/><FaStar/><FaStar/><FaStar color="#aaa"/><FaStar color="#aaa"/>
                                </span>
                            </IconContext.Provider>)
        },
        {
            id: 3,
            value: 2,
            title: '2.0 & up',
            html:          (<IconContext.Provider value={{color: '#fcc02e', size: '.85rem'}}>
                                <span>
                                    <FaStar/><FaStar/><FaStar color="#aaa"/><FaStar color="#aaa"/><FaStar color="#aaa"/>
                                </span>
                            </IconContext.Provider>)
        },
        {
            id: 3,
            title: '1.0 & up',
            value: 1,
            html:          (<IconContext.Provider value={{color: '#fcc02e', size: '.85rem'}}>
                                <span>
                                    <FaStar/><FaStar color="#aaa"/><FaStar color="#aaa"/><FaStar color="#aaa"/><FaStar color="#aaa"/>
                                </span>
                            </IconContext.Provider>)
        },

    ],
    filters: {
        ratings: null,
        game: null,
        language: null

    },
}

setMinValueHandler = (val) => {
    this.setState({
        minValue: val
    });
}

setMaxValueHandler = (val) => {
    this.setState({
        maxValue: val
    });
};

sortGigHandler = (area) => {
    this.setState({
        location: area
    });
}

toggleSelectedHandler = (id, key) => {
    let temp = this.state[key];
    temp[id].selected = !temp[id].selected;
    this.setState({
        [key]: temp,
    });
}

selectDropdownItem = (type, id) => {
    let temp = this.state[type];
    let val = temp[id].title;

    this.setState((prevState) => {
        let filters = {...prevState.filters};
        filters[type] = val;
        return {
            filters: filters
        }
    });
    
}

selectRatingItem = (type, id) => {
    let temp = this.state[type];
    let val = temp[id].title;

    this.setState((prevState) => {
        let filters = {...prevState.filters};
        filters[type] = val;
        return {
            filters: filters
        }
    });
    
}

removeFilterItem = (key) => {
    this.setState((prevState) => {
        let filters = {...prevState.filters};
        filters[key] = null;
        return {
            filters: filters
        }
    });
}

  render() {

    let filters = [];
    for(let key in this.state.filters){
        if(this.state.filters[key] !== null){
            console.log(key);
            console.log(this.state.filters[key]);
            filters.push(<span onClick={() => this.removeFilterItem(key)} className={styles.filter}>{this.state.filters[key]}</span>)
        }
    }
    return (
      <div className={styles.wrapper}>
            <div className={styles.myContainer}>
            <h2 className={styles.numResults} onClick={() => this.props.sortByFilters(this.state.filters)}>2,300 results</h2>
            </div>
            <div className={styles.container}>
            <div className={styles.item}>
                    <Dropdown headerTitle="Filter"/>
            </div>

            <div className={styles.item}>
                <Dropdown 
                    type="games"
                    headerTitle="Game" 
                    list={this.state.games} 
                    selectItem={this.selectDropdownItem} 
                    headerValue={this.state.gameValue}
                    width="260px"
                    />
            </div>

                <div className={styles.item}>
                    <Dropdown 
                        type="ratings"
                        selectItem={this.selectRatingItem}
                        headerTitle="Ratings"
                        list={this.state.ratings}
                        toHTML={true}
                        html={this.state.ratings[0].html}
                    />
                </div>

            
            <div className={styles.item}>
            <Dropdown headerTitle="Language"/>
        </div>            


           


            </div>
            <div className={styles.myContainer}>
            {filters}
            </div>
      </div>
    )
  }
}

export default BrowseNavigation;


// <div className={styles.item}>
// <span className={styles.title}>Sort By</span>
// <select className={styles.select}>
//     <option>Relevance</option>
//     <option>Recommended</option>
//     <option>Highest Price</option>
//     <option>Lowest Price</option>
//     <option>Ratings</option>
// </select>
// </div> 