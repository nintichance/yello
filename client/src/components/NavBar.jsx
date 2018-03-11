import React from 'react'
import { Link } from 'react-router-dom'
import { NavDiv, NavItems } from './styled-components/NavStyle'
import { LogoImage } from './styled-components/Images'

const NavBar = (props) => {

    return (
        <NavDiv>
            <Link to="/"><LogoImage src="https://i.imgur.com/nuztiM2.png"/></Link>
            <NavItems>
                <Link to="/login">Login</Link>
                <Link to="/parents/new">Sign Up</Link>
            </NavItems>
        </NavDiv>
    )

}


export default NavBar
