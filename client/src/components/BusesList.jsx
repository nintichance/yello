import React from 'react'
import Buses from './Buses'
import NavBar from './NavBar'
import { BusShowContainer } from './styled-components/Containers'
const BusesList = (props) => {

    const busesList = props.buses.map((bus, index)=>{
        return(
            <Buses name={bus.name}
                     img={bus.img}
                     address={bus.address}
                     lat={bus.lat}
                     lng={bus.lng}
                     bus_id={bus.id}
                     driver={bus.driver}
                     description={bus.description}
                     bus={bus}
                     key={index}
                     updateParentWithBus={props.updateParentWithBus}/>
        )
    })

    return(
        <BusShowContainer>
            <NavBar />
            {busesList}
        </BusShowContainer>
    )

}

export default BusesList