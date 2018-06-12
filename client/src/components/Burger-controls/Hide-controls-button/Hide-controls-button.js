import React from 'react';
import styles from './Hide-controls-button.css';

const HideControlsButton = props => {
  return (
    <div 
      className={styles.HideControlsButton} 
      onClick={props.toggleControls}>
    </div>
  )
}

export default HideControlsButton;