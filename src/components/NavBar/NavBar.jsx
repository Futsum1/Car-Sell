import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let navs = props.user ?
    <div>
      <Link to='/'>Car List</Link>
      <NavLink exact to="/add">ADD CAR</NavLink>
      
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {navs}
      
  
    </div>
  );
};

export default NavBar;