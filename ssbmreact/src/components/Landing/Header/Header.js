import React from 'react';
import './Header.css';

const header = props => (
    <header className="header">
        <div className="container">
            <div className="containerLeft">
                <h1 className="headingBig">Smash Bros Coaching</h1>
                <h3 className="headingMedium">Find coaches.   Level up.  Compete.</h3>
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className="btn">Sign up</button>
            </div>
            <div className="containerRight">
                <img className="header-img" src="https://pre00.deviantart.net/0c7a/th/pre/i/2015/269/6/5/fire_emblem__marth_by_hakuramen-d9b1y6v.png"/>
            </div>
        </div>
    </header>   

);

export default header;