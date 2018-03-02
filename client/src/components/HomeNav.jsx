import React from 'react'
import { Link } from 'react-router-dom'
import { HomeNavDiv, NavItems } from './styled-components/NavStyle'
import { LogoImage } from './styled-components/Images'

const HomeNav = () => {

    return(
        <HomeNavDiv>
            <Link to="/"><LogoImage src="https://i.imgur.com/et0hxvo.png"/></Link>
            <NavItems>
                <Link to="/login">Login</Link>
                <Link to="/parents/new">Sign Up</Link>
            </NavItems>
        </HomeNavDiv>
    )
}

export default HomeNav