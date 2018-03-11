import React from 'react'
import { Link } from 'react-router-dom'
import { ParentsContainer } from './styled-components/Containers'
import { ParentShowBus, ButtonDiv } from './styled-components/Containers'
import { BusPageButton } from './styled-components/Form'
import { Container, Text, Overlay, Image, DriversImages } from './styled-components/BusPageStyle'
const Buses = (props) => {

    return (

        <div>
                <Container>
                <Link to={`/buses/${props.bus_id}`}>
                    <DriversImages src={props.img} />
                </Link>
                    <Overlay>
                    <Link to={`/buses/${props.bus_id}`}>
 <Text><p>Bus Driver: {props.driver}</p><p>{props.description}</p><p>Bus Number: {props.bus_id}</p></Text></Link>
                        <BusPageButton onClick={() => props.updateParentWithBus(props.bus)}>+</BusPageButton>
                    </Overlay>
               
            </Container>              
        </div>
    )
}

export default Buses


