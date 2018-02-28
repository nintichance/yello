import React from 'react'
import { Nav, NavItems } from './styled-components/NavStyle'
import { LogOutContainer } from './styled-components/Containers'
import { LogoImage, PostIcon } from './styled-components/Images'
import { LogOutButton } from './styled-components/Form'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <Nav>
        <Link to="/"><LogoImage src="https://i.imgur.com/VrabiMU.png"/></Link>
            {/* {localStorage.userId ? 
            <LogOutContainer>
                <PostIcon src="https://i.imgur.com/kCMD9Tu.png"/>
            <LogOutButton>Logout</LogOutButton>
            
            </LogOutContainer> : */}
            <div>
            <Link to="parents/new">Sign Up</Link>
                <Link to="/login">Login</Link>
            </div>
            {/* } */}
        </Nav>
    )
}

export default NavBar