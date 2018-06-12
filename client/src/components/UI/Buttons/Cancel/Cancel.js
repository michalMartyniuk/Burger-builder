import React from 'react';
import styles from './Cancel.css';

const CancelBtn = props => {
  return <button className={styles.cancelBtn} {...props}>Cancel</button>
}

export default CancelBtn;