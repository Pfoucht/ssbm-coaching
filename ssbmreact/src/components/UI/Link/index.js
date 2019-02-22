import React from 'react';
import styles from './index.scss';

const Link = (props) => {
    let { type, href, theme, className} = props;
    let themeClass = theme ? theme : `primary`;
    
    let classList = [
        styles[type], styles[themeClass], className
    ]

    return (
        <a href={href} className={classList.join(' ')}>
            {props.children}
        </a>
    )
}

export default Link;
