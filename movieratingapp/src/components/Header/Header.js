import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'


const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
      <div className='logo'>Movie App</div>
      
      </Link>
     
      <div className='user-image'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0xKoXUryp0JZ1Sxp-99eQiQcFrmA1M1qbQ&s' alt="user" />
      </div>
    </div>
  );
}

export default Header;
