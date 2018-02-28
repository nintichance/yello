import React from 'react'
import { Link } from 'react-router-dom'
const Parents = (props) => {

    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.img}/>
            <Link to={`/parents/${props.parent_id}`}>View Parent</Link>
        </div>
    )
}

export default Parents