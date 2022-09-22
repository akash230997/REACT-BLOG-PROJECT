import React from 'react';
import './NavbarCSS.css';
import { Link } from 'react-router-dom';

import { hover } from '@testing-library/user-event/dist/hover';


export default function Navbar() {
console.log(hover);

  return (
    <div>
      <nav className='navbar'>
              <Link to='/'>
              <div className="uphead">
                    <p>The</p><h1>Siren</h1>
              </div>
              </Link>
              <ul>
                <Link to='/'>
                <li className="navdesign">Home</li>
                </Link>
                  <Link to='/Bollywood'>
                <li className="navdesign">Travelling</li>
                </Link>
                <Link to='/Tech'>
                <li className="navdesign">Technology</li>
                </Link>
                <Link to='/Hollywood' >
                <li className="navdesign">Hollywood</li>
                </Link>
                <Link to='/Fitness'>
                <li className="navdesign">Fitness</li>
                </Link>
                <Link to='/Food'>
                <li className="navdesign">Food</li>
                </Link>
              </ul>
      </nav>
              {/* <hr /> */}
      
    </div>
  )
}
