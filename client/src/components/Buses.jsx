import React from 'react'
import { Link } from 'react-router-dom'
import { ParentsContainer } from './styled-components/Containers'
import { PeopleImages } from './styled-components/Images'

const Buses = (props) => {



// addBusToParent(bus){
    // props.addBusToParent(bus)
// }
    return(
        <ParentsContainer>
            <div>
                
            <h1>{props.driver}</h1>
            <h3>{props.description}</h3>
            <PeopleImages src={props.img}/>
            <Link to={`/buses/${props.bus_id}`}>View Bus</Link>
            {/* <button onClick={() => {this.addBusToParent(props.bus)}}>+</button> */}
            {/* UPDATEPARENTWITHBUS CALLED HERE */}
            <button onClick={() => props.updateParentWithBus(props.bus)}>+</button>
            </div>
        </ParentsContainer>
    )
}

export default Buses