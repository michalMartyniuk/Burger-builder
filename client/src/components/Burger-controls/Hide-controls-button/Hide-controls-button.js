import React from 'react';
import styles from './Hide-controls-button.css';

const HideControlsButton = props => {
  console.log(props.controlsState)
  return (
    <div
      className={styles.HideControlsButton} 
      onClick={props.toggleControls}
    >
      <span>{props.controlsState ? "Show" : "Hide"}</span>
    </div>
  )
}

export default HideControlsButton;