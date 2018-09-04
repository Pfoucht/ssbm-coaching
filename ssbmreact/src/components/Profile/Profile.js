import React from 'react';
import './Profile.css';
const pic = require('../../assets/selfie.JPG');

const trophy1 = require('../../assets/FoxTrophyWiiU.png');
const trophy2 = require('../../assets/IceClimbersTrophyWiiU.png');
const trophy3 = require('../../assets/MarthTrophyWiiU.png');
const trophy4 = require('../../assets/SheikAltTrophyWiiU.png');

const profile = props => {
    return (
        <div className="profile__container">
           <div className="profile__left">
            <div className="profile__box text-center">
                <img className="profile__pic" src={pic} />
                <h3 className="profile__name">YamiTamashi</h3>
                <p>I can coach you to upper grandmaster level</p>
                <div>
                    <button className="profile__btn">Contact Me</button>
                    <button className="profile__btn profile__btn--light">Get Details</button>
                </div>
                <hr/>
                <ul className="profile__list">
                    <li className="profile__item"><span>Location:</span> <strong>Bellevue, WA</strong></li>
                    <li className="profile__item"><span>Smash Rank</span> <strong>Grandmaster</strong></li>
                    <li className="profile__item"><span>Main Hero:</span> <strong>Captain Falcon</strong></li>
                    <li className="profile__item"><span>Smashing since:</span> <strong>2014</strong></li>
                </ul>
            </div>
            <div className="profile__box">
                    <h3 className="profile__name">Bio</h3>
                    <p className="profile__p">loremlorem lorem. I am a generated response written by camden. Yami has been smahing since he was 3 yrs old. he can get you to level 99 in three days.</p>
                <hr/>
                    <h3 className="profile__name">Bio</h3>
                    <p className="profile__p">loremlorem lorem. I am a generated response written by camden. Yami has been smahing since he was 3 yrs old. he can get you to level 99 in three days.</p>
                </div>
           </div> 

           <div className="profile__right">
                <div className="profile__heros">
                    <div className="hero__header">
                        <h2 className="profile__name">Yamis Heros</h2>
                    </div>
                    <div className="hero__container">
                        <img src={trophy1} className="trophy"/>
                        <img src={trophy2} className="trophy"/>
                        <img src={trophy3} className="trophy"/>
                        <img src={trophy4} className="trophy"/>
                        <img src={trophy1} className="trophy"/>
                </div>
                </div>

                <div className="profle__reviews">
                    <div className="reivew__header">
                    <h3 className="profile__name">Yamis Reviews</h3>
                    </div>
                    <div className="user__review">
                            <img src={pic} className="review__pic"/>
                            <div className="review__content">
                                <h4>CamHeichou</h4>
                                <div className="star__container"><span className="review__star">☆</span><span className="review__star">☆</span><span className="review__star">☆</span><span className="review__star">☆</span><span className="review__star">☆</span></div> 
                                <p className="review__p">Yami Tamashi is probably the equivalent of a bronze Hanzo player. He had difficulty teaching offledge wave shines. His Sheik is alright though.</p>
                                <span className="review__date">2 weeks ago</span>
                            </div>
                    </div>
                    <div className="user__review">
                            <img src={pic} className="review__pic"/>
                            <div className="review__content">
                                <h4>CamHeichou</h4>
                                <div className="star__container"><span className="review__star">☆</span><span className="review__star">☆</span><span className="review__star">☆</span><span className="review__star">☆</span><span className="review__star">☆</span></div> 
                                <p className="review__p">Yami Tamashi is probably the equivalent of a bronze Hanzo player. He had difficulty teaching offledge wave shines. His Sheik is alright though.</p>
                                <span className="review__date">2 weeks ago</span>
                            </div>
                    </div>
                    <div className="user__review">
                            <img src={pic} className="review__pic"/>
                            <div className="review__content">
                                <h4>CamHeichou</h4>
                                <div className="star__container"><span className="review__star">☆</span><span className="review__star">☆</span><span className="review__star">☆</span><span className="review__star">☆</span><span className="review__star">☆</span></div> 
                                <p className="review__p">Yami Tamashi is probably the equivalent of a bronze Hanzo player. He had difficulty teaching offledge wave shines. His Sheik is alright though.</p>
                                <span className="review__date">2 weeks ago</span>
                            </div>
                    </div>                                              
                </div>
           </div>
        </div>
    );
}

export default profile;