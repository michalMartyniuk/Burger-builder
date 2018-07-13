import React from 'react';
import styles from './Navigation.css';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';

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
    login = (
      <Aux>
        <div className={styles.loginLink} style={{marginLeft: 'auto'}}>
          <Link to="/login">
            <div className={styles.linkDiv}>Login</div>
          </Link>
        </div>

        <div className={styles.linkDiv} onClick={props.loginModal}>
          <i class="fas fa-user"></i>
          <span className={styles.navText}>Login</span> 
        </div>
      </Aux>
    )
    signup = (
      <Aux>
        <div className={styles.signupLink}>
          <Link to="/signup">    
            <div className={styles.linkDiv}>Sign up</div>
          </Link>
        </div>

        <div className={styles.linkDiv} onClick={props.signupModal}>
          <i className="fas fa-sign-in-alt"></i>
          <span className={styles.navText}>Sign up</span> 
        </div>
      </Aux>
    )
  }

  return (
    <div className={styles.Navigation}>
      <div className={styles.menuIcon} onClick={props.toggleSidedrawer}>
        <div className={styles.iconItem}></div>
        <div className={styles.iconItem}></div>
        <div className={styles.iconItem}></div>
      </div>
      <img className={styles.burgerIcon} src="https://png.icons8.com/color/48/000000/hamburger.png"></img>
      <Link to="/"><div className={styles.linkDiv}>
        <span>Burger builder</span> </div>
      </Link>
      <div className={styles.menu}>
        {orders}
        {login}
        {signup}
        {logout}
      </div>
    </div>
  )
}

export default Navigation;