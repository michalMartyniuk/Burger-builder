import React from 'react';
import styles from './Navigation-item.css';


const NavigationItem = props => {
  return (
    <div className={styles.NavigationItem} style={props.drawerItemStyle}>
      <a className={styles.itemContent}>{props.name}</a>
    </div>
  )
}

export default NavigationItem;