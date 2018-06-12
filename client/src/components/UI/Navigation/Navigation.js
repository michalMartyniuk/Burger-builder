import React from 'react';
import styles from './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = props => {

  let orders = null;
  let login = null;
  let signup = null;
  let logout = null;

  if(localStorage.getItem('userId')) {
    orders = <Link to='/orders'><div className={styles.linkDiv}>Orders</div></Link>
    logout = <button onClick={props.logout} className={styles.logout}>Log out</button>
  }
  else {
    login = <Link to="/login" style={{marginLeft: 'auto'}}><div className={styles.linkDiv}>Login</div></Link>
    signup = <Link to="/signup"><div className={styles.linkDiv}>Sign up</div></Link>
  }

  return (
    <div className={styles.Navigation}>
      <div className={styles.menuIcon} onClick={props.toggleSidedrawer}>
        <div className={styles.iconItem}></div>
        <div className={styles.iconItem}></div>
        <div className={styles.iconItem}></div>
      </div>
      <Link to="/"><div className={styles.linkDiv}>Burger builder</div></Link>
      {orders}
      {login}
      {signup}
      {logout}
    </div>
  )
}

export default Navigation;