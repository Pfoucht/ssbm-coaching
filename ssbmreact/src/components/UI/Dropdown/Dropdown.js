import React, { Component } from 'react'
import styles from './Dropdown.css';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import onClickOutside from 'react-onclickoutside';


class Dropdown extends Component {

    state = {
        listOpen: false
    }

    handleClickOutside = (e) => {
        this.setState({
            listOpen: false
        });
    }

    toggleListHandler = () => {
        this.setState((prevState) => {
            return {
                listOpen: !prevState.listOpen
            }
        });
    }

  render() {
    let items = null;
    if(this.props.list){
        items = this.props.list.map((el) => {
            return <li 
                        className={styles.item} 
                        onClick={() => this.props.selectItem(this.props.type, el.id)}>
                        {!this.props.toHTML 
                        ? 
                        el.title
                        :
                        <span>{el.html} <span className={styles.dropdownSpan}>{el.title}</span></span>
                        }</li>
        });
    }
    return (
      <div className={styles.wrapper} onClick={this.toggleListHandler} style={{width: this.props.width ? this.props.width : '200px'}}>
        <div className={styles.header} >
            <div className={styles.headerTitle}>{this.props.headerValue ? this.props.headerValue : this.props.headerTitle}</div>
            <div>
            <IconContext.Provider value={{color: '#686F7A', size: '1rem'}}>
            <div>
                {!this.state.listOpen ?
                    <FaCaretDown/>
                    :
                    <FaCaretUp/>
                }
            </div>
         </IconContext.Provider>
            </div>
        </div>

        {this.state.listOpen ?
        <ul className={styles.list}>
            {items}
        </ul>
        :null
        }
      </div>
    )
  }
}


export default onClickOutside(Dropdown);