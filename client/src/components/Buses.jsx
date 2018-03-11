import React from 'react'
import { Link } from 'react-router-dom'
import { ParentsContainer } from './styled-components/Containers'
import { PeopleImages } from './styled-components/Images'
import { Header, ParentShowContainer, ParentPageContainer } from './styled-components/ParentPageStyle'
import { ParentShowBus, ButtonDiv } from './styled-components/Containers'
import { BusPageButton } from './styled-components/Form'
import { Container, Text, Overlay, Image } from './styled-components/BusPageStyle'
const Buses = (props) => {

    return (

        <div>
                <Container>
                <Link to={`/buses/${props.bus_id}`}>
                    <PeopleImages src={props.img} />

                    <Overlay>
                        <Text><p>Bus Driver: {props.driver}</p><p>{props.description}</p></Text><br/>
                        <Text></Text>
                    </Overlay>
                </Link>
            </Container>              
        </div>
    )
}

export default Buses


