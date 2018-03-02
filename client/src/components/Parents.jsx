import React from 'react'
import { Link } from 'react-router-dom'
import { ParentsContainer } from './styled-components/Containers'
import { PeopleImages } from './styled-components/Images'
import { Card, CardTitle } from 'react-materialize'
const Parents = (props) => {

    return (
        <ParentsContainer>
            {/* <div>
            <h1>{props.name}</h1>
            <PeopleImages src={props.img}/>
            <Link to={`/parents/${props.parent_id}`}>View Parent</Link>
            </div> */}
            <Card header={<CardTitle reveal image={props.img} waves='light' />}
                title={props.name}
                reveal={<p>Click parent to check out this parent's buses that they follow!</p>}>
                <p><Link to={`/parents/${props.parent_id}`}>View Parent</Link></p>
            </Card>
        </ParentsContainer>
    )
}

export default Parents