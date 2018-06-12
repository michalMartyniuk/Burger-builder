import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Navigation from '../UI/Navigation/Navigation';
import Sidedrawer from '../UI/Sidedrawer/Sidedrawer';
import withRouter from 'react-router';

const Layout = (props) => (
  <Aux>
    <main className="Content">
      {props.children}
    </main>
  </Aux>
);

export default Layout;