import React from 'react'
import { Link } from 'react-router-dom'
import { ParentsContainer } from './styled-components/Containers'
import { PeopleImages } from './styled-components/Images'
import { Header, ParentShowContainer, ParentPageContainer } from './styled-components/ParentPageStyle'
import { ParentShowBus } from './styled-components/Containers'
import { ParentPageButton } from './styled-components/Form'

const Buses = (props) => {

    return (

        <ParentsContainer>
            <ParentShowContainer>
                <ParentShowBus>
                    <PeopleImages src={props.img} />
                    <p>The Bus Driver is: {props.driver}</p>
                    <h3>{props.description}</h3>
                    <ParentPageButton> <Link to={`/buses/${props.bus_id}`}>Track Bus</Link></ParentPageButton>
                    <button onClick={() => props.updateParentWithBus(props.bus)}>+</button>
                </ParentShowBus>
            </ParentShowContainer>
        </ParentsContainer>
    )
}

export default Buses