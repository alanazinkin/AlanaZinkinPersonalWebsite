import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className = 'navbar'>
        <div className = 'leftSide'>

        </div>
        <div className = 'rightSide'>
            <Link to='/'> Home </Link>
            <Link to='/about'> About Alana </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/experiences'> Experiences </Link>
            <Link to='/contact'> Contact </Link>
            <Link to='/FINALresume.pdf'> Resume </Link>
        </div>
    </div>
  )
}

export default Navbar