import React from 'react'
import styles from './ProfileLeft.css';

export default () => {
  return (
    <div className={styles.flexOneThird}>
    <div className={styles.box}>
        <div className={styles.boxTitle}>Connect</div>
        <div className={styles.content}>
            <ul>
                <li className={styles.item2}>
                    <img
                        src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png"
                        className={styles.listIcon}/>
                    Facebook
                </li>
                <li className={styles.item2}>
                    <img
                        src="https://www.bernardmarr.com/img/case-study/logos/twitter.png"
                        className={styles.listIcon}/>
                    Twitter
                </li>
                <li className={styles.item2}>
                    <img
                        src="https://vignette.wikia.nocookie.net/fallout/images/4/43/Twitch_icon.png/revision/latest?cb=20180507131302"
                        className={styles.listIcon}/>
                    Twitch
                </li>
                <li className={styles.item2}>
                    <img
                        src="https://lh3.googleusercontent.com/Ned_Tu_ge6GgJZ_lIO_5mieIEmjDpq9kfgD05wapmvzcInvT4qQMxhxq_hEazf8ZsqA"
                        className={styles.listIcon}/>
                    Youtube
                </li>
            </ul>
        </div>
    </div>
    <div className={styles.box}>
        <div className={styles.boxTitle}>Other</div>
        <div className={styles.content}>
            <ul>
                <li className={styles.item2}>
                    <img
                        src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png"
                        className={styles.listIcon}/>
                    Facebook
                </li>
                <li className={styles.item2}>
                    <img
                        src="https://www.bernardmarr.com/img/case-study/logos/twitter.png"
                        className={styles.listIcon}/>
                    Twitter
                </li>
                <li className={styles.item2}>
                    <img
                        src="https://vignette.wikia.nocookie.net/fallout/images/4/43/Twitch_icon.png/revision/latest?cb=20180507131302"
                        className={styles.listIcon}/>
                    Twitch
                </li>
                <li className={styles.item2}>
                    <img
                        src="https://lh3.googleusercontent.com/Ned_Tu_ge6GgJZ_lIO_5mieIEmjDpq9kfgD05wapmvzcInvT4qQMxhxq_hEazf8ZsqA"
                        className={styles.listIcon}/>
                    Youtube
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}
