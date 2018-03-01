import React from 'react'
import { LogoImage } from './styled-components/Images'
import { Link } from 'react-router-dom'
import { NavDiv } from './styled-components/Containers'

const NavBar = (props) => {
    return (
            <NavDiv>
            <Link to="/"><LogoImage src="https://i.imgur.com/VrabiMU.png"/></Link>
                {/* {localStorage.userId ? 
                <LogOutContainer>
                    <PostIcon src="https://i.imgur.com/kCMD9Tu.png"/>
                <LogOutButton>Logout</LogOutButton>
                
                </LogOutContainer> : */}
                <div>
                    <Link to="/parents/new">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </div>
                {/* } */}
            </NavDiv>
    )
}

export default NavBar