import React from 'react';
import './Benefits.css';

const benefits = props => (
    <div className="benefits">
        <h1 className="headingBig headingBenefit">Benefits</h1>
        <div className="flexbox">
            <div className="col">
                <img className="icon-holder" src="https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-22-512.png" />
                <h5 className="headerSmall">Connect with top coaches</h5>
                <p className="para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="col">
                <img className="icon-holder" src="https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-22-512.png" />
                <h5 className="headerSmall">Improve your fundamentals</h5>
                <p className="para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="col">
                <img className="icon-holder" src="https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-22-512.png" />
                <h5 className="headerSmall">Centralized learning hub</h5>
                <p className="para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>                                  
        </div>
    </div>
);

export default benefits;