import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItems } from './styled-components/NavStyle'

const NavBar = (props) => {

    return (
        <Nav>
            <Link to="/">Home</Link>
            <NavItems>
                <Link to="/login">Login</Link>
                <Link to="/parents/new">Sign Up</Link>
            </NavItems>
        </Nav>
    )

}


export default NavBar
