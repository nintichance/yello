import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { ParentsContainer } from './styled-components/Containers'
const Parents = (props) => {

    return(
        <ParentsContainer>
            <div>
            <h1>{props.name}</h1>
            <img src={props.img}/>
            <Link to={`/parents/${props.parent_id}`}>View Parent</Link>
            </div>
        </ParentsContainer>
    )
}

export default Parents