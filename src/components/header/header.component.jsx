import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'



const Header = () => (
    <div className='header'>
        <Link className="logo-container" to="/">
          <h2>Fake User</h2>
        </Link>
        <div className="options">
            <Link className='option nav-style' to="/createuser"><h5>Create User </h5></Link>
        </div>
    </div>
)



export default Header;

