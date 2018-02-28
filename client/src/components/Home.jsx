import React from 'react'
import NavBar from './NavBar'
import { HomeContainer } from './styled-components/Containers'
import { Link } from 'react-router-dom'
const Home = () =>{

    return(
        <HomeContainer>
            <NavBar/>
          <Link to="/parents">Parents</Link>
          <Link to="/buses">Buses</Link>
        </HomeContainer>


    )
}


export default Home