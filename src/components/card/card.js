import React from 'react'
import styles from './card.module.scss';
const Card = ({ text }) => {
 return (
  <div className={styles.Container}>
   <h1 className={styles.Heading}>{text?.name}</h1>
   <div className={styles.TextWrapper}>
    <div className={styles.TextContainer}>
     <img className={styles.Img} src="https://via.placeholder.com/18x18" />
     <p className={styles.Text}>{text?.last_updated_at}</p>
    </div>
    <div className={styles.TextContainer}>
     <img className={styles.Img} src="https://via.placeholder.com/18x18" />
     <p className={styles.Text}>{text?.location}</p>
    </div>
    <div className={styles.TextContainer}>
     <img className={styles.Img} src="https://via.placeholder.com/18x18" />
     <p className={styles.Text}>{text?.gender}</p>
    </div>
   </div>
  </div>
 )
}

export default Card