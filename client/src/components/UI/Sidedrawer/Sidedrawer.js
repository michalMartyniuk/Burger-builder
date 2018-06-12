import React from 'react';
import styles from './Sidedrawer.css';
import { Link } from 'react-router-dom';

const Sidedrawer = props => {

  let login = null;
  let logout = null;
  let signup = null;
  let orders = null;

  const sideDrawerStyle = {
    transform: props.show ? 'translateX(0)' : 'translateX(-100%)',    
  }

  const logoutHandler = () => {
    props.click()
    props.logout()
  }

  if(localStorage.getItem('userId')) {
    logout = <div className={styles.logout} onClick={logoutHandler}>Log out</div>
    orders = <Link to="/orders" onClick={props.click}><div className={styles.item}>Orders</div></Link> 
  }
  else {
    login = <Link to="/login" onClick={props.click}><div className={styles.item}>Log in</div></Link>
    signup = <Link to="/signup" onClick={props.click}><div className={styles.item}>Sign up</div></Link>
  }

  return (
    <div 
      className={styles.Sidedrawer}
      style={sideDrawerStyle}
    >
      <Link to="/" onClick={props.click}><div className={styles.item}>Burger builder</div></Link>  
      {orders}
      {login}
      {signup}  
      {logout}
    </div>
  )
}

export default Sidedrawer;