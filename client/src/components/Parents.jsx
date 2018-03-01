import React from 'react'
import { Link } from 'react-router-dom'
import { ParentsContainer } from './styled-components/Containers'
import { PeopleImages } from './styled-components/Images'

const Parents = (props) => {

    return(
        <ParentsContainer>
            <div>
            <h1>{props.name}</h1>
            <PeopleImages src={props.img}/>
            <Link to={`/parents/${props.parent_id}`}>View Parent</Link>
            </div>
        </ParentsContainer>
    )
}

export default Parents