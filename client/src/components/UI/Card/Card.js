import React from 'react';
import styles from './Card.css';

const Card = props => {

  let title = props.title ? <h2 className={styles.cardTitle} style={props.styleTitle}>{props.title}</h2> : null

  return (
    <div className={styles.Card} style={props.styleCard}>
      {title}
      {props.children}
    </div>
  )
}

export default Card;